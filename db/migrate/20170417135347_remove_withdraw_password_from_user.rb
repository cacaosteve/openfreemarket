class RemoveWithdrawPasswordFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :withdraw_password
  end
end
