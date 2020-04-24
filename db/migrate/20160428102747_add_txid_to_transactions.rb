class AddTxidToTransactions < ActiveRecord::Migration[5.0]
  def change
    add_column :transactions, :txid, :string
    add_column :transactions, :order_ids, :string
  end
end
