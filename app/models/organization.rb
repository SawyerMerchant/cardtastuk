class Organization < ApplicationRecord

  has_many :users
  has_many :admin_users
  has_one :rep, -> { where(role: "rep") }, class_name: "AdminUser"

  accepts_nested_attributes_for :admin_users

  def self.by_active
    Organization.where("active = true")
  end

end
