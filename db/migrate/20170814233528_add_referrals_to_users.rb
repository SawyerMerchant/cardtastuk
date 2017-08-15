class AddReferralsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :organization_id, :integer
    add_column :users, :admin_user_id, :integer

    add_foreign_key :users, :organizations
    add_foreign_key :users, :admin_users
  end
end
