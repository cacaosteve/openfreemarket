class RemoveTrackingNumberAndTrackingOptionFromOrder < ActiveRecord::Migration[5.0]
  def change
    remove_column :orders, :tracking_number
    remove_column :orders, :tracking_option
  end
end
