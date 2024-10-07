# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2024_08_01_210305) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "active_admin_comments", id: :serial, force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_id", null: false
    t.string "resource_type", null: false
    t.string "author_type"
    t.integer "author_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "activities", id: :serial, force: :cascade do |t|
    t.string "trackable_type"
    t.integer "trackable_id"
    t.string "owner_type"
    t.integer "owner_id"
    t.string "key"
    t.text "parameters"
    t.string "recipient_type"
    t.integer "recipient_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["owner_id", "owner_type"], name: "index_activities_on_owner_id_and_owner_type"
    t.index ["owner_type", "owner_id"], name: "index_activities_on_owner_type_and_owner_id"
    t.index ["recipient_id", "recipient_type"], name: "index_activities_on_recipient_id_and_recipient_type"
    t.index ["recipient_type", "recipient_id"], name: "index_activities_on_recipient_type_and_recipient_id"
    t.index ["trackable_id", "trackable_type"], name: "index_activities_on_trackable_id_and_trackable_type"
    t.index ["trackable_type", "trackable_id"], name: "index_activities_on_trackable_type_and_trackable_id"
  end

  create_table "additional_informartion_messages", id: :serial, force: :cascade do |t|
    t.text "message"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "addresses", id: :serial, force: :cascade do |t|
    t.string "address"
    t.integer "user_id"
    t.boolean "is_active"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "admin_users", id: :serial, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "application_configurations", id: :serial, force: :cascade do |t|
    t.string "name"
    t.boolean "status", default: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "auto_finalize", default: 15
    t.float "percentage"
    t.integer "auto_cancel"
  end

  create_table "bitcoin_currencies", id: :serial, force: :cascade do |t|
    t.string "code"
    t.string "name"
    t.float "rate"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "categories", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "categories_items", id: false, force: :cascade do |t|
    t.integer "category_id"
    t.integer "item_id"
    t.index ["category_id"], name: "index_categories_items_on_category_id"
    t.index ["item_id"], name: "index_categories_items_on_item_id"
  end

  create_table "conversations", id: :serial, force: :cascade do |t|
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "conversations_users", id: :serial, force: :cascade do |t|
    t.integer "conversation_id"
    t.integer "sender_id"
    t.integer "receiver_id"
    t.boolean "is_deleted"
    t.boolean "is_read"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "countries", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "countries_items", id: false, force: :cascade do |t|
    t.integer "country_id"
    t.integer "item_id"
    t.index ["country_id"], name: "index_countries_items_on_country_id"
    t.index ["item_id"], name: "index_countries_items_on_item_id"
  end

  create_table "currency_configs", id: :serial, force: :cascade do |t|
    t.string "name"
    t.boolean "status"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "deposits", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.text "txid"
    t.boolean "status", default: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "galleries", id: :serial, force: :cascade do |t|
    t.text "image"
    t.integer "item_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "impressions", id: :serial, force: :cascade do |t|
    t.string "impressionable_type"
    t.integer "impressionable_id"
    t.integer "user_id"
    t.string "controller_name"
    t.string "action_name"
    t.string "view_name"
    t.string "request_hash"
    t.string "ip_address"
    t.string "session_hash"
    t.text "message"
    t.text "referrer"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["controller_name", "action_name", "ip_address"], name: "controlleraction_ip_index"
    t.index ["controller_name", "action_name", "request_hash"], name: "controlleraction_request_index"
    t.index ["controller_name", "action_name", "session_hash"], name: "controlleraction_session_index"
    t.index ["impressionable_type", "impressionable_id", "ip_address"], name: "poly_ip_index"
    t.index ["impressionable_type", "impressionable_id", "request_hash"], name: "poly_request_index"
    t.index ["impressionable_type", "impressionable_id", "session_hash"], name: "poly_session_index"
    t.index ["impressionable_type", "message", "impressionable_id"], name: "impressionable_type_message_index"
    t.index ["user_id"], name: "index_impressions_on_user_id"
  end

  create_table "invitation_users", id: :serial, force: :cascade do |t|
    t.string "invitation_token"
    t.string "role"
    t.datetime "invitation_accepted_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "user_id"
    t.boolean "status", default: true
  end

  create_table "items", id: :serial, force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.float "price"
    t.boolean "is_hidden"
    t.boolean "is_up_front_payment"
    t.integer "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "quantity"
    t.string "currency"
    t.integer "ship_from"
    t.text "random_string"
    t.boolean "unlimited", default: false
    t.boolean "is_deleted", default: false
  end

  create_table "items_shipping_options", id: false, force: :cascade do |t|
    t.integer "item_id"
    t.integer "shipping_option_id"
    t.index ["item_id"], name: "index_items_shipping_options_on_item_id"
    t.index ["shipping_option_id"], name: "index_items_shipping_options_on_shipping_option_id"
  end

  create_table "languages", id: :serial, force: :cascade do |t|
    t.string "name"
    t.boolean "status", default: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "mailboxer_conversation_opt_outs", id: :serial, force: :cascade do |t|
    t.string "usub_type"
    t.integer "usub_id"
    t.integer "conversation_id"
    t.index ["conversation_id"], name: "index_mailboxer_conversation_opt_outs_on_conversation_id"
    t.index ["usub_type", "usub_id"], name: "index_mailboxer_conversation_opt_outs_on_usub_type_and_usub_id"
  end

  create_table "mailboxer_conversations", id: :serial, force: :cascade do |t|
    t.string "subject", default: ""
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "mailboxer_receipts", id: :serial, force: :cascade do |t|
    t.string "receiver_type"
    t.integer "receiver_id"
    t.integer "notification_id", null: false
    t.boolean "is_read", default: false
    t.boolean "trashed", default: false
    t.boolean "deleted", default: false
    t.string "mailbox_type", limit: 25
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["notification_id"], name: "index_mailboxer_receipts_on_notification_id"
    t.index ["receiver_type", "receiver_id"], name: "index_mailboxer_receipts_on_receiver_type_and_receiver_id"
  end

  create_table "market_names", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "mbntfcn", id: :serial, force: :cascade do |t|
    t.string "type"
    t.text "body"
    t.string "subject", default: ""
    t.string "sender_type"
    t.integer "sender_id"
    t.integer "conversation_id"
    t.boolean "draft", default: false
    t.string "notification_code"
    t.string "notified_object_type"
    t.integer "notified_object_id"
    t.string "attachment"
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "created_at", precision: nil, null: false
    t.boolean "global", default: false
    t.datetime "expires", precision: nil
    t.index ["conversation_id"], name: "index_mbntfcn_on_conversation_id"
    t.index ["notified_object_type", "notified_object_id"], name: "index_mbntfcn_on_notified_object_type_and_notified_object_id"
    t.index ["sender_type", "sender_id"], name: "index_mbntfcn_on_sender_type_and_sender_id"
  end

  create_table "member_prices", id: :serial, force: :cascade do |t|
    t.float "price"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "multisig_transactions", id: :serial, force: :cascade do |t|
    t.text "address"
    t.text "redeem_script"
    t.text "vendor_address"
    t.text "buyer_address"
    t.text "escrow_address"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "shopping_cart_id"
    t.integer "order_id"
    t.text "tx_id"
    t.float "total"
    t.text "shop_pub_key"
    t.text "buyer_pub_key"
  end

  create_table "option_links", id: :serial, force: :cascade do |t|
    t.string "link"
    t.boolean "disabled"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "orders", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "item_id"
    t.string "status"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "quantity"
    t.float "total_payment"
    t.integer "shipping_id"
    t.text "additional_information_message"
    t.string "feedback_comment"
    t.integer "rating", default: 0
    t.boolean "multisig", default: false
    t.text "tx_id"
    t.string "confirmation"
    t.text "escrow_address"
    t.integer "shopping_cart_id"
    t.boolean "sent_back_extra_payment", default: false
    t.date "confirmation_time"
    t.date "shipping_time"
    t.string "item_name"
  end

  create_table "private_messages", id: :serial, force: :cascade do |t|
    t.integer "sender_id"
    t.integer "receiver_id"
    t.text "body"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "conversation_id"
    t.boolean "is_deleted", default: false
    t.boolean "is_read", default: false
  end

  create_table "shipping_options", id: :serial, force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.string "currency"
    t.integer "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "shopping_cart_items", id: :serial, force: :cascade do |t|
    t.integer "owner_id"
    t.string "owner_type"
    t.integer "quantity"
    t.integer "item_id"
    t.string "item_type"
    t.integer "price_cents", default: 0, null: false
    t.string "price_currency", default: "USD", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "shipping_id"
  end

  create_table "shopping_carts", id: :serial, force: :cascade do |t|
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "additional_information_message_id"
    t.integer "user_id"
  end

  create_table "simple_captcha_data", id: :serial, force: :cascade do |t|
    t.string "key", limit: 40
    t.string "value", limit: 6
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["key"], name: "idx_key"
  end

  create_table "tracking_numbers", id: :serial, force: :cascade do |t|
    t.integer "sender_id"
    t.integer "receiver_id"
    t.integer "order_id"
    t.text "tracking_number"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "transactions", id: :serial, force: :cascade do |t|
    t.string "transaction_type"
    t.string "status"
    t.float "amount"
    t.string "username"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "txid"
    t.string "order_ids"
    t.string "receiver"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: ""
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "role"
    t.string "location"
    t.string "pin"
    t.string "currency"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "username"
    t.string "locale"
    t.string "fe_policy"
    t.text "description"
    t.float "fee"
    t.string "public_url"
    t.boolean "fa_pgp"
    t.string "member"
    t.text "phrase"
    t.string "authentication_token"
    t.string "string_indentifier"
    t.string "invitation_token"
    t.datetime "invitation_created_at", precision: nil
    t.datetime "invitation_sent_at", precision: nil
    t.datetime "invitation_accepted_at", precision: nil
    t.integer "invitation_limit"
    t.string "invited_by_type"
    t.integer "invited_by_id"
    t.integer "invitations_count", default: 0
    t.float "amount", default: 0.0
    t.text "identifier"
    t.string "blockchain_password"
    t.boolean "status_escrow", default: true
    t.datetime "last_active", precision: nil
    t.float "percentage", default: 1.0
    t.boolean "vacation_mode", default: false
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
    t.index ["email"], name: "index_users_on_email"
    t.index ["invitation_token"], name: "index_users_on_invitation_token", unique: true
    t.index ["invitations_count"], name: "index_users_on_invitations_count"
    t.index ["invited_by_id"], name: "index_users_on_invited_by_id"
    t.index ["invited_by_type", "invited_by_id"], name: "index_users_on_invited_by_type_and_invited_by_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token"
  end

  add_foreign_key "mailboxer_conversation_opt_outs", "mailboxer_conversations", column: "conversation_id", name: "mb_opt_outs_on_conversations_id"
  add_foreign_key "mailboxer_receipts", "mbntfcn", column: "notification_id", name: "receipts_on_notification_id"
  add_foreign_key "mbntfcn", "mailboxer_conversations", column: "conversation_id", name: "notifications_on_conversation_id"
end
