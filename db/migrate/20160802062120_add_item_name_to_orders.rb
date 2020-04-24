class AddItemNameToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :item_name, :string
  end
end
