class AddNameToLineItem < ActiveRecord::Migration[5.0]
  def change

    add_column :line_items, :print_name, :string
    add_column :line_items, :quantity, :integer
    add_reference :line_items, :price
    add_column :line_items, :charge_amount, :integer
    add_column :line_items, :return_address_line_1, :string
    add_column :line_items, :return_address_line_2, :string
    add_column :line_items, :return_city, :string
    add_column :line_items, :return_state, :string
    add_column :line_items, :return_zip, :string

    add_column :users, :billing_address, :integer
    add_column :users, :return_address, :integer
    add_index :users, :billing_address
    add_index :users, :return_address
  end
end
