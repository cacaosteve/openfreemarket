class ChangePriceFromIntegerToDouble < ActiveRecord::Migration[5.0]
  def up
    change_column :items, :price, :float
  end

  def down
    change_column :items, :price, :integer
  end
end
