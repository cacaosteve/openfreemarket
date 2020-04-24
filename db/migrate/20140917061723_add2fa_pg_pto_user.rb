class Add2faPgPtoUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :fa_pgp, :boolean
  end
end
