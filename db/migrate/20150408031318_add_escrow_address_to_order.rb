class AddEscrowAddressToOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :escrow_address, :text
  end
end
