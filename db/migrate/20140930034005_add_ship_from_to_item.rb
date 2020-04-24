class AddShipFromToItem < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :ship_from, :integer
  end
end
