class Item < ActiveRecord::Base
	is_impressionable
  include PublicActivity::Model
  tracked owner: ->(controller, model) { controller && controller.current_user }
	
  has_and_belongs_to_many :shipping_options
  has_and_belongs_to_many :categories
  has_and_belongs_to_many :countries
  belongs_to :country, foreign_key: :ship_from
  belongs_to :user
  has_many :galleries, dependent: :destroy
  has_many :orders, dependent: :destroy
  accepts_nested_attributes_for :galleries, :reject_if => :all_blank, :allow_destroy => true

  scope :qty_available, -> { where("quantity > 0") }

  validates :name, :price, :quantity, presence: true
  validates :price, numericality: { :greater_than_or_equal_to => 0.0001, message: "The price should be greater than 0.0001 BCH" }

  before_create :generate_random_string
  before_validation :check_currency_item_price

  attr_accessor :price_in_BCH

  def self.get_uncategories_items
    self.joins('LEFT JOIN categories_items ON categories_items.item_id = items.id').where(categories_items: { category_id: nil })
  end

  def self.ship_from_item
    self.joins(:country, :user).where("users.role = ? AND items.quantity > 0", "Vendor").select("COUNT(items.*) as item_count, countries.name as country_name, countries.id as country_id").group('country_name, country_id').group_by { |group| [group.country_name, group.country_id ] }
  end

  def self.get_time
    current_time = Time.now.utc
    seventy_two_hours_ago = current_time - 72.hours
  end

  def self.get_filtered_items(params)
    vendor_activity = nil  # Initialize the variable
    country_ids = []
    seventy_two_hours_ago = self.get_time
    limit = params[:limit] || 20
    sort = case params[:sort]
           when "quantity" then "items.quantity desc"
           when "newest" then "items.created_at desc"
           when "rating" then "SUM(orders.rating) desc"
           when "total_order" then "total_quantity desc"
           else "items.id asc"
           end

    items = self.joins(:user).where(is_deleted: false)

    if params[:country].present? && !params[:country].zero?
      items = items.joins(:countries).where("countries_items.country_id IN (?)", params[:country])
    end

    if params[:ship_to].present? || params[:ship_from].present?
      country_ids << params[:ship_to].to_i if params[:ship_to].present?
      country_ids << params[:ship_from].to_i if params[:ship_from].present?
      items = items.joins(:countries).where("countries_items.country_id IN (?)", country_ids)
    end

    if vendor_activity.present? || params[:ship_to].present? || params[:ship_from].present?
      items = items.where(is_hidden: false)
    else
      items = items.where("users.last_active >= ? AND users.vacation_mode IS FALSE AND items.is_hidden IS FALSE", seventy_two_hours_ago)
    end

    if params[:rating].present? || %w[rating total_order].include?(params[:sort])
      rating_condition = params[:rating].to_i.positive? ? "SUM(orders.rating) >= ?" : "1=1"
      items = items.joins("LEFT OUTER JOIN orders ON items.id = orders.item_id")
                   .select("coalesce(SUM(orders.quantity), 0) as total_quantity, items.*")
                   .having(rating_condition, params[:rating].to_i)
    end

    if params[:member].eql?("member")
      items = items.where("users.member = ? AND items.is_hidden IS FALSE", "Confirmed")
    end

    if params[:name].present?
      items = items.where("users.username ILIKE ? OR items.name ILIKE ?", "%#{params[:name]}%", "%#{params[:name]}%")
    end

    items = items.order(sort).group("items.id")

    begin
      currencies = JSON.parse(URI.open("https://bitpay.com/api/rates").read)
    rescue OpenURI::HTTPError, JSON::ParserError => e
      Rails.logger.error "Failed to fetch currency rates: #{e.message}"
      currencies = []
    end

    active_currencies = CurrencyConfig.where(status: true).map(&:name)
    rates = currencies.each_with_object({}) do |currency, hash|
      hash[currency['code'].downcase.to_sym] = currency['rate'] if active_currencies.include?(currency['code'])
    end

    items.each do |item|
      item.price_in_BCH = if item.currency.present? && rates[item.currency.downcase.to_sym]
                            item.price / rates[item.currency.downcase.to_sym]
                          else
                            item.price
                          end
    end

    if params[:sort].eql?("lowest")
      items = items.sort_by(&:price_in_BCH)
    elsif params[:sort].eql?("highest")
      items = items.sort_by(&:price_in_BCH).reverse
    end

    Kaminari.paginate_array(items).page(params[:page]).per(limit)
  end

  def self.duplicate_item(params)
    item = self.find(params[:item_id])
    new_item = item.dup
    new_item.save
    item.galleries.each do |gallery|
      item_gallery = Gallery.new
      gallery_path = gallery.image.current_path
      if File.exist?(gallery_path)
        item_gallery.image = File.open(gallery_path)
      else
        gallery_url = gallery.image.url
        item_gallery.image = open(URI.parse(gallery_url))
      end
      item_gallery.item_id = new_item.id
      item_gallery.save
    end
    categories = item.categories
    countries = item.countries
    new_item.categories << categories
    new_item.countries << countries

    new_item
  end

  def self.change_status(params)
    item = self.find(params[:item_id])
    item.is_hidden = params[:item_status]
    item.save
  end

  def price_with_precision
    old_price = self.price.to_s
    new_price = BigDecimal(old_price)
    new_price
  end

  def converted_price(rate)
    price / rate
  end

  def generate_random_string
    self.random_string = SecureRandom.hex
  end

  def check_currency_item_price
    unless self.currency.eql?("BCH") || self.currency.eql?("Bitcoin")
      if self.currency.eql? "United States Dollar"
        self.currency = "USD"
      elsif currency.eql?"Indonesian Rupiah"
        self.currency = "IDR"
      end

      group_local = BitcoinCurrency.select { |bc| bc.code.eql? self.currency }
      new_price = self.price.to_f / group_local.first.rate.to_f
      
      self.errors.add(:price, "The price should be greater than 0.0001 BCH") if new_price <= 0.0001
    end
  end
end




