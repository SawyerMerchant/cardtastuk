class AddRoleToAdminUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_users, :role, :string, default: "member"
  end
end
