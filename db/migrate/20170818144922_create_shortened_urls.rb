class CreateShortenedUrls < ActiveRecord::Migration[5.0]
  def change
    create_table :shortened_urls do |t|
      t.references :admin_user, foreign_key: true
      t.string :short_url
      t.string :code
      t.string :full_path
      t.integer :visits, default: 0

      t.timestamps
    end
  end
end
