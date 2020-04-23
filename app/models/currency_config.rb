class CurrencyConfig < ActiveRecord::Base

  def self.get_currency_with_status_true
    self.where(status: true).order("name ASC").map(&:name)
  end

end