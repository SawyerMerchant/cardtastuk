# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170817195706) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_type"
    t.integer  "resource_id"
    t.string   "author_type"
    t.integer  "author_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id", using: :btree
  end

  create_table "addresses", force: :cascade do |t|
    t.string   "address_line1"
    t.string   "address_line2"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "addressable_id"
    t.string   "addressable_type"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "cards", force: :cascade do |t|
    t.string   "name"
    t.string   "large_img_url"
    t.string   "medium_img_url"
    t.string   "small_img_url"
    t.text     "default_greeting"
    t.string   "orientation"
    t.string   "size"
    t.integer  "category_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "price_id"
    t.string   "aws_image_file_name"
    t.string   "aws_image_content_type"
    t.integer  "aws_image_file_size"
    t.datetime "aws_image_updated_at"
    t.index ["category_id"], name: "index_cards_on_category_id", using: :btree
    t.index ["price_id"], name: "index_cards_on_price_id", using: :btree
  end

  create_table "cards_tags", id: false, force: :cascade do |t|
    t.integer "card_id", null: false
    t.integer "tag_id",  null: false
    t.index ["card_id", "tag_id"], name: "index_cards_tags_on_card_id_and_tag_id", using: :btree
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fulfillments", force: :cascade do |t|
    t.integer  "card_count"
    t.string   "confirmation"
    t.string   "combined_list_file_name"
    t.string   "combined_list_content_type"
    t.integer  "combined_list_file_size"
    t.datetime "combined_list_updated_at"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.jsonb    "body"
  end

  create_table "line_items", force: :cascade do |t|
    t.integer  "order_id"
    t.integer  "list_id"
    t.text     "greeting"
    t.integer  "card_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.string   "print_name"
    t.integer  "quantity"
    t.integer  "price_id"
    t.integer  "charge_amount"
    t.string   "return_address_line_1"
    t.string   "return_address_line_2"
    t.string   "return_city"
    t.string   "return_state"
    t.string   "return_zip"
    t.string   "autograph_file_name"
    t.string   "autograph_content_type"
    t.integer  "autograph_file_size"
    t.datetime "autograph_updated_at"
    t.string   "font"
    t.index ["card_id"], name: "index_line_items_on_card_id", using: :btree
    t.index ["list_id"], name: "index_line_items_on_list_id", using: :btree
    t.index ["order_id"], name: "index_line_items_on_order_id", using: :btree
    t.index ["price_id"], name: "index_line_items_on_price_id", using: :btree
  end

  create_table "lists", force: :cascade do |t|
    t.string   "name"
    t.integer  "user_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "url_file_name"
    t.string   "url_content_type"
    t.integer  "url_file_size"
    t.datetime "url_updated_at"
    t.integer  "count"
    t.jsonb    "first_record"
    t.index ["first_record"], name: "index_lists_on_first_record", using: :gin
    t.index ["user_id"], name: "index_lists_on_user_id", using: :btree
  end

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "status",         default: "pending"
    t.jsonb    "stripe"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.integer  "front_charge"
    t.integer  "back_charge"
    t.integer  "fulfillment_id"
    t.index ["stripe"], name: "index_orders_on_stripe", using: :gin
    t.index ["user_id"], name: "index_orders_on_user_id", using: :btree
  end

  create_table "organizations", force: :cascade do |t|
    t.string   "name"
    t.string   "subdomain"
    t.boolean  "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prices", force: :cascade do |t|
    t.string   "name"
    t.integer  "x25"
    t.integer  "x100"
    t.integer  "x250"
    t.integer  "x500"
    t.integer  "x1000"
    t.integer  "x2000"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "proofs", force: :cascade do |t|
    t.integer  "line_item_id"
    t.string   "document_file_name"
    t.string   "document_content_type"
    t.integer  "document_file_size"
    t.datetime "document_updated_at"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.index ["line_item_id"], name: "index_proofs_on_line_item_id", using: :btree
  end

  create_table "recipients", force: :cascade do |t|
    t.integer  "list_id"
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id"], name: "index_recipients_on_list_id", using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "provider",               default: "email", null: false
    t.string   "uid",                    default: "",      null: false
    t.string   "encrypted_password",     default: "",      null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,       null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "email"
    t.json     "tokens"
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.integer  "organization_id"
    t.integer  "admin_user_id"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true, using: :btree
  end

  add_foreign_key "cards", "categories"
  add_foreign_key "line_items", "cards"
  add_foreign_key "line_items", "lists"
  add_foreign_key "line_items", "orders"
  add_foreign_key "lists", "users"
  add_foreign_key "orders", "fulfillments"
  add_foreign_key "orders", "users"
  add_foreign_key "proofs", "orders", column: "line_item_id"
  add_foreign_key "recipients", "lists"
  add_foreign_key "users", "admin_users"
  add_foreign_key "users", "organizations"
end
