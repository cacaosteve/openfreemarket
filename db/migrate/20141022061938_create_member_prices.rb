class CreateMemberPrices < ActiveRecord::Migration[5.0]
  def change
    create_table :member_prices do |t|
      t.float :price

      t.timestamps
    end
  end
end
