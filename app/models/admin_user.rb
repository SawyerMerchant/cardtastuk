class AdminUser < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :users
  has_many :shortened_urls
  belongs_to :organization, required: false

  ROLES = %w[member leader rep owner]
  def role?(base_role)
    ROLES.index(base_role.to_s) <= ROLES.index(role)
  end

  after_create do |au|
    path_name = "/welcome?referrer=#{au.first_name}&admin=#{au.id}&organization=#{au.organization_id}"

    code = loop do
      random_6_chars = (0...6).map { (65 + rand(26)).chr }.join
      break random_6_chars unless ShortenedUrl.exists?(code: random_6_chars)
    end

    ShortenedUrl.create(admin_user_id: au.id,
      short_url: "http://card.tastuk.com/u/#{code}",
      code: code,
      full_path: "http://card.tastuk.com#{path_name}",
      path_name: path_name)
  end
end
