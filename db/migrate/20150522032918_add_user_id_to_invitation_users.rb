class AddUserIdToInvitationUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :invitation_users, :user_id, :integer
  end
end
