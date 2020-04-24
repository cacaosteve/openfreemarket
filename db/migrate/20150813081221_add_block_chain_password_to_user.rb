class AddBlockChainPasswordToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :blockchain_password, :string
  end
end
