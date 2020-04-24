class CreateGalleries < ActiveRecord::Migration[5.0]
  def change
    create_table :galleries do |t|
      t.text :image
      t.integer :item_id

      t.timestamps
    end
  end
end
