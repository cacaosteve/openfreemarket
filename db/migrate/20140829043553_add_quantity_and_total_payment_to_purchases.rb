class AddQuantityAndTotalPaymentToPurchases < ActiveRecord::Migration[5.0]
  def change
    add_column :purchases, :quantity, :integer
    add_column :purchases, :total_payment, :float
  end
end
