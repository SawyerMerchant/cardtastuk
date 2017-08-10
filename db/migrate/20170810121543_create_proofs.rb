class CreateProofs < ActiveRecord::Migration[5.0]
  def change
    create_table :proofs do |t|
      t.references :order, foreign_key: true
      t.attachment :document

      t.timestamps
    end
  end
end
