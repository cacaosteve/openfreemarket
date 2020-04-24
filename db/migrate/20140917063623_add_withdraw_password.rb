class AddWithdrawPassword < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :withdraw_password, :string
  end
end
