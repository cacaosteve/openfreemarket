class BitcoinCurrency < ActiveRecord::Base
	def self.reset_currencies
    currencies = JSON.load(open("https://bitpay.com/api/rates/BCH"))
    # bch = currencies.select { |currency| currency["code"] == "BCH" }.first
    # currencies.each { |r| r["rate"] = r["rate"] / bch["rate"] }
    currencies.each { |r| r["rate"] = r["rate"] }
    BitcoinCurrency.delete_all
    BitcoinCurrency.create(currencies)
  end
end
