class RemoveShipToFromItem < ActiveRecord::Migration[5.0]
  def change
    remove_column :items, :ship_to
  end
end
