class AddAmountToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :amount, :float, default: 0
  end
end
