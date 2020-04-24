class AddConfirmationTimeAndShippingTime < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :confirmation_time, :date
    add_column :orders, :shipping_time, :date
  end
end
