class AddStatusEscrowToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :status_escrow, :boolean, default: true
  end
end
