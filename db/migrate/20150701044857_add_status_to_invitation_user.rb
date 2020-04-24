class AddStatusToInvitationUser < ActiveRecord::Migration[5.0]
  def change
    add_column :invitation_users, :status, :boolean, default: true
  end
end
