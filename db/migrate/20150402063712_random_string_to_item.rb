class RandomStringToItem < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :random_string, :text
  end
end
