class CreateCardsTags < ActiveRecord::Migration[5.0]
  def change
    create_table :cards_tags do |t|
      t.references :card, foreign_key: true
      t.references :tag, foreign_key: true


      t.timestamps

    end
    drop_table :cards_tags
  end
end
