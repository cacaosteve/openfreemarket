class AddPercentageToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :percentage, :float, default: 1
  end
end
