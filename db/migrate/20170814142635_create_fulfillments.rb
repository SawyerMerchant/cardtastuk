class CreateFulfillments < ActiveRecord::Migration[5.0]
  def change
    create_table :fulfillments do |t|
      t.integer :card_count
      t.string :confirmation
      t.attachment :combined_list

      t.timestamps
    end
  end
end
