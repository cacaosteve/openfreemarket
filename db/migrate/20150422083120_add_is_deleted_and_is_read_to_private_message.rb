class AddIsDeletedAndIsReadToPrivateMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :private_messages, :is_deleted, :boolean, default: false
    add_column :private_messages, :is_read, :boolean, default: false
  end
end
