class Invitation < ApplicationRecord
  belongs_to :admin_user
  belongs_to :shortened_url, required: false


  after_create do |invite|
    au = invite.admin_user
    if au.role == "member"
      path_name = "/welcome?referrer=#{au.first_name}&admin=#{au.id}&organization=#{au.organization_id}&target=#{invite.first_name}"
    elsif invite.admin_user.role == "leader"
      path_name = "/memberRegister?organization=#{au.organization_id}&first_name=#{invite.first_name}&last_name=#{invite.last_name}&email=#{invite.email}"
    end

    code = loop do
      random_6_chars = (0...6).map { (65 + rand(26)).chr }.join
      break random_6_chars unless ShortenedUrl.exists?(code: random_6_chars)
    end

    su = ShortenedUrl.create(admin_user_id: au.id,
      short_url: "http://card.tastuk.com/u/#{code}",
      code: code,
      full_path: "http://card.tastuk.com#{path_name}",
      path_name: path_name)

    invite.shortened_url_id = su.id
    invite.save
  end


end
