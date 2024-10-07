class BitcoinCurrency < ActiveRecord::Base
  def self.reset_currencies
    begin
      currencies = JSON.parse(URI.open("https://bitpay.com/api/rates/BCH").read)
      BitcoinCurrency.transaction do
        BitcoinCurrency.delete_all
        BitcoinCurrency.create(currencies)
      end
    rescue OpenURI::HTTPError, JSON::ParserError => e
      Rails.logger.error "Failed to reset currencies: #{e.message}"
    end
  end
end
