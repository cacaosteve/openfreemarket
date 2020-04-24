class AddAutoCancelToApplicationConfiguration < ActiveRecord::Migration[5.0]
  def change
    add_column :application_configurations, :auto_cancel, :integer
  end
end
