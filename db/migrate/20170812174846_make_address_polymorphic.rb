class MakeAddressPolymorphic < ActiveRecord::Migration[5.0]
  def change
    add_column :addresses, :addressable_id, :integer
    add_column :addresses, :addressable_type, :string

    remove_column :recipients, :address_id
    remove_column :users, :billing_address
    remove_column :users, :return_address
  end
end
