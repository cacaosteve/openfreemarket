# frozen_string_literal: true

class AddDeviseToAdminUsers < ActiveRecord::Migration[7.1]
  def self.up
    change_table :admin_users do |t|
      ## Database authenticatable
      t.string :email, null: false, default: "" unless column_exists?(:admin_users, :email)
      t.string :encrypted_password, null: false, default: "" unless column_exists?(:admin_users, :encrypted_password)

      ## Recoverable
      t.string :reset_password_token unless column_exists?(:admin_users, :reset_password_token)
      t.datetime :reset_password_sent_at unless column_exists?(:admin_users, :reset_password_sent_at)

      ## Rememberable
      t.datetime :remember_created_at unless column_exists?(:admin_users, :remember_created_at)

      ## Trackable
      # Uncomment if using these columns
      # t.integer  :sign_in_count, default: 0, null: false unless column_exists?(:admin_users, :sign_in_count)
      # t.datetime :current_sign_in_at unless column_exists?(:admin_users, :current_sign_in_at)
      # t.datetime :last_sign_in_at unless column_exists?(:admin_users, :last_sign_in_at)
      # t.string   :current_sign_in_ip unless column_exists?(:admin_users, :current_sign_in_ip)
      # t.string   :last_sign_in_ip unless column_exists?(:admin_users, :last_sign_in_ip)

      ## Confirmable
      # t.string   :confirmation_token unless column_exists?(:admin_users, :confirmation_token)
      # t.datetime :confirmed_at unless column_exists?(:admin_users, :confirmed_at)
      # t.datetime :confirmation_sent_at unless column_exists?(:admin_users, :confirmation_sent_at)
      # t.string   :unconfirmed_email unless column_exists?(:admin_users, :unconfirmed_email) # Only if using reconfirmable

      ## Lockable
      # Uncomment if using these columns
      # t.integer  :failed_attempts, default: 0, null: false unless column_exists?(:admin_users, :failed_attempts)
      # t.string   :unlock_token unless column_exists?(:admin_users, :unlock_token)
      # t.datetime :locked_at unless column_exists?(:admin_users, :locked_at)

      # Uncomment below if timestamps were not included in your original model.
      # t.timestamps null: false unless column_exists?(:admin_users, :created_at)
    end

    add_index :admin_users, :email, unique: true unless index_exists?(:admin_users, :email)
    add_index :admin_users, :reset_password_token, unique: true unless index_exists?(:admin_users, :reset_password_token)
    # Uncomment the following if you're using these indices
    # add_index :admin_users, :confirmation_token, unique: true unless index_exists?(:admin_users, :confirmation_token)
    # add_index :admin_users, :unlock_token, unique: true unless index_exists?(:admin_users, :unlock_token)
  end

  def self.down
    raise ActiveRecord::IrreversibleMigration
  end
end
