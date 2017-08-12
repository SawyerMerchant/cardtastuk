class ChangeOrderIdToLineItemIdOnProofs < ActiveRecord::Migration[5.0]
  def change
    rename_column :proofs, :order_id, :line_item_id
  end
end
