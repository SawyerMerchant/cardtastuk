class AddRepIdToOrganization < ActiveRecord::Migration[5.0]
  def change
    add_column :organizations, :rep_id, :integer
  end
end
