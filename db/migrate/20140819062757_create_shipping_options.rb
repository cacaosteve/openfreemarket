class CreateShippingOptions < ActiveRecord::Migration[5.0]
  def change
    create_table :shipping_options do |t|
      t.string :name
      t.float :price
      t.string :currency
      t.integer :user_id

      t.timestamps
    end
  end
end
