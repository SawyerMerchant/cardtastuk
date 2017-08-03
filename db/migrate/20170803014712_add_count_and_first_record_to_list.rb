class AddCountAndFirstRecordToList < ActiveRecord::Migration[5.0]
  def change
    add_column :lists, :count, :integer
    add_column :lists, :first_record, :jsonb
    add_index :lists, :first_record, using: :gin
  end
end
