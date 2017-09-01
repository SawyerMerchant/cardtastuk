class AddFontSizeToProof < ActiveRecord::Migration[5.0]
  def change
    add_column :proofs, :font_size, :integer
  end
end
