class AddStringIndentifierToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :string_indentifier, :string
  end
end
