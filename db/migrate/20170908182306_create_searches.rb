class CreateSearches < ActiveRecord::Migration[5.1]
  def change
    create_table :searches do |t|
      t.string :md5
      t.string :query
      t.integer :hits

      t.timestamps
    end
  end
end
