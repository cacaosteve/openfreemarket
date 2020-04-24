class AddUnlimitedToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :unlimited, :boolean, default: false
  end
end
