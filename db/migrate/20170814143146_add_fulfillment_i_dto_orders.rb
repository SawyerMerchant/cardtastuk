class AddFulfillmentIDtoOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :fulfillment_id, :integer
    add_foreign_key :orders, :fulfillments
  end
end
