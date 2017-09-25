class AdminUser < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :users
  has_many :shortened_urls
  belongs_to :organization, required: false
  has_many :accounts, foreign_key: "rep_id", class_name: "Organization"

  ROLES = %w[member leader rep owner]
  def role?(base_role)
    ROLES.index(base_role.to_s) <= ROLES.index(role)
  end

  after_create do |au|
    case au.role
    when "member"
      ShortenedUrl.create_sales_link(au)
    when "leader"
      ShortenedUrl.create_sales_link(au)
      ShortenedUrl.create_members_link(au)
    when "rep"
      ShortenedUrl.create_orgs_link(au)
    else
      puts 'Not a recognized role'
    end






  end

end
