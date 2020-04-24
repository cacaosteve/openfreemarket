class AddAutoFinalizeToApplicationConfiguration < ActiveRecord::Migration[5.0]
  def change
    add_column :application_configurations, :auto_finalize, :integer, default: 15
  end
end
