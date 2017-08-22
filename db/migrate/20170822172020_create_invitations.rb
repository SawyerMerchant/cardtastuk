class CreateInvitations < ActiveRecord::Migration[5.0]
  def change
    create_table :invitations do |t|
      t.references :admin_users, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :cell_number
      t.references :shortened_urls, foreign_key: true

      t.timestamps
    end
  end
end
