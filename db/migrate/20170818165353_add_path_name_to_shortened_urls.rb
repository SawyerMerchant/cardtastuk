class AddPathNameToShortenedUrls < ActiveRecord::Migration[5.0]
  def change
    add_column :shortened_urls, :path_name, :string
  end
end
