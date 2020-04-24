class AddShippingIdToShoppingCartItem < ActiveRecord::Migration[5.0]
  def change
    add_column :shopping_cart_items, :shipping_id, :integer
  end
end
