class AddTxIdToOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :tx_id, :text
  end
end
