class AddIndexToSearchHits < ActiveRecord::Migration[5.1]
  def up
    add_index :searches, :hits
  end

  def down
    remove_index :searches, :hits
  end
end
