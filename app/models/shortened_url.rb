class ShortenedUrl < ApplicationRecord
  belongs_to :admin_user

  after_find do |link|
    link.visits += 1
    link.save
  end
end
