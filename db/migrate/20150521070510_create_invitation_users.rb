class CreateInvitationUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :invitation_users do |t|
      t.string :invitation_token
      t.string :role
      t.date :invitation_accepted_at

      t.timestamps
    end
  end
end
