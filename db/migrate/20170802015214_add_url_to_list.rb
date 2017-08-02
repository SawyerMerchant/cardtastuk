class AddUrlToList < ActiveRecord::Migration[5.0]
  def change
    add_attachment :lists, :url
  end
end
