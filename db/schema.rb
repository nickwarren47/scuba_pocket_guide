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

ActiveRecord::Schema.define(version: 2022_09_22_030921) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "animals", force: :cascade do |t|
    t.string "name"
    t.string "species_name"
    t.integer "size"
    t.string "image_url"
    t.boolean "dangerous"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dive_logs", force: :cascade do |t|
    t.integer "dive_number"
    t.string "dive_site_name"
    t.string "dive_site_country"
    t.date "date"
    t.datetime "time_in"
    t.datetime "time_out"
    t.integer "depth_achieved"
    t.integer "starting_psi"
    t.integer "ending_psi"
    t.integer "air_temp"
    t.integer "surface_temp"
    t.integer "bottom_temp"
    t.boolean "fresh_or_salt_water"
    t.boolean "shore_or_boat"
    t.boolean "training_dive"
    t.bigint "diver_id", null: false
    t.bigint "dive_site_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dive_site_id"], name: "index_dive_logs_on_dive_site_id"
    t.index ["diver_id"], name: "index_dive_logs_on_diver_id"
  end

  create_table "dive_site_animals", force: :cascade do |t|
    t.bigint "dive_site_id", null: false
    t.bigint "animal_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["animal_id"], name: "index_dive_site_animals_on_animal_id"
    t.index ["dive_site_id"], name: "index_dive_site_animals_on_dive_site_id"
  end

  create_table "dive_sites", force: :cascade do |t|
    t.string "name"
    t.string "country"
    t.string "image_url"
    t.string "country_flag"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "avg_depth"
    t.text "description"
    t.string "diver_skill_level"
    t.integer "rating"
  end

  create_table "divers", force: :cascade do |t|
    t.string "name"
    t.string "country_from"
    t.string "diver_cert_level"
    t.integer "age"
    t.boolean "disclaimer"
    t.string "email"
    t.string "password_digest"
    t.string "avatar"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
  end

  add_foreign_key "dive_logs", "dive_sites"
  add_foreign_key "dive_logs", "divers"
  add_foreign_key "dive_site_animals", "animals"
  add_foreign_key "dive_site_animals", "dive_sites"
end
