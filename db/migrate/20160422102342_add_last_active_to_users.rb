class AddLastActiveToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :last_active, :datetime
  end
end
