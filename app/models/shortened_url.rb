class ShortenedUrl < ApplicationRecord
  belongs_to :admin_user

  after_find do |link|
    link.visits += 1
    link.save
  end

  SHORT_BASE = "http://card.tastuk.com/u/"
  LINK_TYPES = %w[sales members organizations]

  def self.make_url(au, path_name, link_type)
    code = ShortenedUrl.get_code
    ShortenedUrl.create(admin_user_id: au.id,
    short_url: "#{SHORT_BASE}#{code}",
    code: code,
    full_path: "http://card.tastuk.com#{path_name}",
    path_name: path_name,
    link_type: link_type)
  end

  def self.create_sales_link(au)
    path_name = "/welcome?referrer=#{au.first_name}&admin=#{au.id}&organization=#{au.organization_id}"
    ShortenedUrl.make_url(au, path_name, "sales")
  end

  def self.create_members_link(au)
    path_name = "/repRegister?leader_first_name=#{au.first_name}&leader_last_name=#{au.last_name}&organization_name=#{au.organization.name}"
    ShortenedUrl.make_url(au, path_name, "members")
  end

  def self.create_orgs_link(au)
    path_name = "/fundraise?rep=#{au.id}"
    ShortenedUrl.make_url(au, path_name, "organizations")
  end

  def self.get_code
    loop do
      random_6_chars = (0...6).map { (65 + rand(26)).chr }.join
      break random_6_chars unless ShortenedUrl.exists?(code: random_6_chars)
    end
  end

end
