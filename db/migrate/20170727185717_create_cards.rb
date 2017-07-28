class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :large_img_url
      t.string :medium_img_url
      t.string :small_img_url
      t.text :default_greeting
      t.string :orientation
      t.string :size
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
