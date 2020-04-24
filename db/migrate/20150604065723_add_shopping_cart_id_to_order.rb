class AddShoppingCartIdToOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :shopping_cart_id, :integer
  end
end
