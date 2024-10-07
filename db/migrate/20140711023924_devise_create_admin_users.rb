class DeviseCreateAdminUsers < ActiveRecord::Migration[5.0]
  def migrate(direction)
    super
    # Create a default user
    AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if direction == :up
  end

  def change
    add_index :admin_users, :email,                unique: true
    add_index :admin_users, :reset_password_token, unique: true
    # add_index :admin_users, :confirmation_token,   unique: true
    # add_index :admin_users, :unlock_token,         unique: true
  end
end
