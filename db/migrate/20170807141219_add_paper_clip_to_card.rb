class AddPaperClipToCard < ActiveRecord::Migration[5.0]
  def change
    add_attachment :cards, :aws_image
  end
end
