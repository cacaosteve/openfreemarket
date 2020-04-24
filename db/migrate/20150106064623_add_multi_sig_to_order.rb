class AddMultiSigToOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :multisig, :boolean, default: false
  end
end
