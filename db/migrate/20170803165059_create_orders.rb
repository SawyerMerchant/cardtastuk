class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.references :user, foreign_key: true
      t.string :status
      t.jsonb :stripe

      t.timestamps
    end

    add_index :orders, :stripe, using: :gin
  end
end
