class AddPriceReferenceToCard < ActiveRecord::Migration[5.0]
  def change
    add_reference :cards, :price, index: true
  end
end
