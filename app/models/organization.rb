class Organization < ApplicationRecord

  has_many :users

  def self.by_active
    Organization.where("active = true")
  end

end
