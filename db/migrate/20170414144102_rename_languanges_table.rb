class RenameLanguangesTable < ActiveRecord::Migration[5.0]
  def self.up
    rename_table :languanges, :languages
  end

  def self.down
    rename_table :languages, :languanges
  end
end
