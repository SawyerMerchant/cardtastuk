class Organization < ApplicationRecord

  has_many :users
  has_many :admin_users

  def self.by_active
    Organization.where("active = true")
  end

end
