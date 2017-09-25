class AddLinkTypeToShortenedUrls < ActiveRecord::Migration[5.0]
  def change
    add_column :shortened_urls, :link_type, :string
  end
end
