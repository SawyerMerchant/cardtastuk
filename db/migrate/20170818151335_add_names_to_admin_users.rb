class AddNamesToAdminUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_users, :first_name, :string
    add_column :admin_users, :last_name, :string
    add_column :admin_users, :organization_id, :integer
    add_foreign_key :admin_users, :organizations
  end
end
