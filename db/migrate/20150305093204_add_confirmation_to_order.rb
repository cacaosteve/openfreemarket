class AddConfirmationToOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :confirmation, :string
  end
end
