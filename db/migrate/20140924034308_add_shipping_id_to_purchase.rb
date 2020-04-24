class AddShippingIdToPurchase < ActiveRecord::Migration[5.0]
  def change
    add_column :purchases, :shipping_id, :integer
  end
end
