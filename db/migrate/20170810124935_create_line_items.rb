class CreateLineItems < ActiveRecord::Migration[5.0]
  def change
    create_table :line_items do |t|
      t.references :order, foreign_key: true
      t.references :list, foreign_key: true
      t.text :greeting
      t.references :card, foreign_key: true
      t.attachment :signature

      t.timestamps
    end
  end
end
