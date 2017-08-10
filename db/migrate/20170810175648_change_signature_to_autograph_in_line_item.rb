class ChangeSignatureToAutographInLineItem < ActiveRecord::Migration[5.0]
  def change

    remove_attachment :line_items, :signature

    add_attachment :line_items, :autograph

  end
end
