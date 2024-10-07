require 'open-uri'
require 'json'

class ApiController < ApplicationController
  before_action :authenticate_user_from_token!
  before_action :category
  before_action :market_name
  before_action :get_BCH_rates
  before_action :cors_preflight_check
  after_action :cors_set_access_control_headers
 
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    headers['Access-Control-Max-Age'] = "1728000"
  end
 
  def cors_preflight_check
    if request.method == 'OPTIONS'
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Prototype-Version, Token'
      headers['Access-Control-Max-Age'] = '1728000'

      render plain: '', content_type: 'text/plain'
    end
  end

  def get_BCH_rates
    begin
      # Fetch the rates from the BitPay API
      response = URI.open("https://bitpay.com/api/rates")
      currencies = JSON.parse(response.read)

      # Get active currencies from the database
      active_currencies = CurrencyConfig.where(status: true).map(&:name)

      # Filter the rates based on active currencies
      rates = currencies.select { |hash| active_currencies.include?(hash['code']) }

      # Store the filtered rates, flattening if needed
      @rates = rates.each_slice(6).to_a.flatten
    rescue OpenURI::HTTPError, JSON::ParserError => e
      Rails.logger.error "Failed to fetch or parse BCH rates: #{e.message}"
      # Provide fallback rates or handle the error appropriately
      @rates = []
    end
  end

  def market_name
    @market_name = MarketName.first
    if user_signed_in?
      @message_not_read_count = ConversationsUser.where(receiver_id: current_user.id, is_read: false).count
    end
  end

  def category
    @categories = Category.all
    @ship_from = Item.ship_from_item
    @ship_to = Country.ship_to_item
  end

  private
  # For this example, we are simply using token authentication
  # via parameters. However, anyone could use Rails's token
  # authentication features to get the token from a header.
  def authenticate_user_from_token!
    user_token = params[:auth_token].presence
    user       = user_token && User.find_by_authentication_token(user_token.to_s)
 
    unless user
      render json: { errors: 'user must signed in' }, status: :unprocessable_entity
    end
  end
end