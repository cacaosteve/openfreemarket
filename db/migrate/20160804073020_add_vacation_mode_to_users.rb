class AddVacationModeToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :vacation_mode, :boolean, default: false
  end
end
