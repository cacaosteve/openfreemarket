class AddPercentagePayToApplicationConfiguration < ActiveRecord::Migration[5.0]
  def change
    add_column :application_configurations, :percentage, :float
  end
end
