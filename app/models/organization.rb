class Organization < ApplicationRecord

  has_many :users
  has_many :admin_users

  accepts_nested_attributes_for :admin_users

  def self.by_active
    Organization.where("active = true")
  end

end
