class CreateBitcoinCurrencies < ActiveRecord::Migration[5.0]
  def change
    create_table :bitcoin_currencies do |t|
      t.string :code
      t.string :name
      t.float :rate

      t.timestamps
    end
  end
end
