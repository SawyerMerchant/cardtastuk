class CreateRecipients < ActiveRecord::Migration[5.0]
  def change
    create_table :recipients do |t|
      t.references :list, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.references :address, foreign_key: true

      t.timestamps
    end
  end
end
