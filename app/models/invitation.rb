class Invitation < ApplicationRecord
  belongs_to :admin_users
  belongs_to :shortened_urls
end
