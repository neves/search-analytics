class CreateSearches < ActiveRecord::Migration[5.1]
  def change
    create_table :searches, id: false, primary_key: :md5 do |t|
      t.string :md5
      t.string :query
      t.integer :hits, default: 1

      t.timestamps
    end

    add_index :searches, :md5, unique: true
  end
end
