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

ActiveRecord::Schema.define(version: 20170909013719) do

  create_table "searches", id: false, force: :cascade do |t|
    t.string "md5"
    t.string "query"
    t.integer "hits", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hits"], name: "index_searches_on_hits"
    t.index ["md5"], name: "index_searches_on_md5", unique: true
  end

end
