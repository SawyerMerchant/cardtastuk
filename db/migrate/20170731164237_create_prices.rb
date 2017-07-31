class CreatePrices < ActiveRecord::Migration[5.0]
  def change
    create_table :prices do |t|
      t.string :name
      t.integer :x25
      t.integer :x100
      t.integer :x250
      t.integer :x500
      t.integer :x1000
      t.integer :x2000

      t.timestamps
    end
  end
end
