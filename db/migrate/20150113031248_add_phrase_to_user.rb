class AddPhraseToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :phrase, :text
  end
end
