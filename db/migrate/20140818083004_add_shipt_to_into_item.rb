class AddShiptToIntoItem < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :ship_to, :string
  end
end
