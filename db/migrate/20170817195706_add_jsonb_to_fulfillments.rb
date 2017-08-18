class AddJsonbToFulfillments < ActiveRecord::Migration[5.0]
  def change
    add_column :fulfillments, :body, :jsonb
  end
end
