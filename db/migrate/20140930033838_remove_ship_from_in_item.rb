class RemoveShipFromInItem < ActiveRecord::Migration[5.0]
  def change
    remove_column :items, :ship_from
  end
end
