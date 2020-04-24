class AddMemberToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :member, :string
  end
end
