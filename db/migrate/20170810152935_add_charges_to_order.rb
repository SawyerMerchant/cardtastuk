class AddChargesToOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :front_charge, :integer
    add_column :orders, :back_charge, :integer
  end
end
