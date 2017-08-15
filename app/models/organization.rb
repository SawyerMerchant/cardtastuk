class Organization < ApplicationRecord

  def self.by_active
    Organization.where("active = true")
  end

end
