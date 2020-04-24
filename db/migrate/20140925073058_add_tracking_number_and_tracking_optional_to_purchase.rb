class AddTrackingNumberAndTrackingOptionalToPurchase < ActiveRecord::Migration[5.0]
  def change
    add_column :purchases, :tracking_number, :string
    add_column :purchases, :tracking_option, :string
  end
end
