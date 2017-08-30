class SetOrgActiveDefaultTrue < ActiveRecord::Migration[5.0]
  def change
    change_column :organizations, :active, :boolean, default: true
  end
end
