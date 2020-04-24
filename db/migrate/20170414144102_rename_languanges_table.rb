class RenameLanguagesTable < ActiveRecord::Migration[5.0]
  def self.up
    rename_table :languages, :languages
  end

  def self.down
    rename_table :languages, :languages
  end
end
