class CreateMarketNames < ActiveRecord::Migration[5.0]
  def change
    create_table :market_names do |t|
      t.string :name

      t.timestamps
    end
  end
end
