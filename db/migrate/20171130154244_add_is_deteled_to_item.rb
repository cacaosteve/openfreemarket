class AddIsDeteledToItem < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :is_deleted, :boolean, default: false
  end
end
