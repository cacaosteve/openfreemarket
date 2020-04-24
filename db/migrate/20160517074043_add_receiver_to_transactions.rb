class AddReceiverToTransactions < ActiveRecord::Migration[5.0]
  def change
    add_column :transactions, :receiver, :string
  end
end
