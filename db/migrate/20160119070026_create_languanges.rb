class CreateLanguanges < ActiveRecord::Migration[5.0]
  def change
    create_table :languanges do |t|
      t.string :name
      t.boolean :status, default: false

      t.timestamps
    end
  end
end
