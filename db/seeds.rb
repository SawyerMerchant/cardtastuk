if Rails.env == "development"
  puts "Reset Database"
  Rake::Task['db:migrate:reset'].invoke
end




COUNT = 10

puts "Making Organizations"
organizations = []
COUNT.times do
  Organization.create(name: Faker::Hipster.word,
                      subdomain: Faker::Hipster.word,
                      active: true)
end

puts "making admin users"
adminUsers = []
COUNT.times do
  adminUsers << au = AdminUser.create!(email: Faker::Internet.email, password: 'password', password_confirmation: 'password') #if Rails.env.development?
  au.organization_id = rand(Organization.first.id..Organization.last.id)
  au.first_name = Faker::Name.first_name
  au.last_name = Faker::Name.last_name
  au.save
end

puts "making shortened_urls"
adminUsers.each do |au|
  path_name = "/welcome?target=#{Faker::Name.first_name}&referrer=#{au.first_name}&admin=#{au.id}&organization=#{au.organization_id}"
  COUNT.times do
    code = (0...6).map { (65 + rand(26)).chr }.join
    ShortenedUrl.create(admin_user_id: au.id,
      short_url: "http://card.tastuk.com/u/#{code}",
      code: code,
      full_path: "http://card.tastuk.com#{path_name}",
      path_name: path_name  )
  end
end

# http://cardtastuk.herokuapp.com/welcome?target=Christian&referrer=John&admin=1&organization=1

puts "making categories"
categories = []
COUNT.times do
  categories << Category.create(name: Faker::Hipster.word)
end

puts "making prices"
Price.create(x25: 300,
            x100: 290,
            x250: 281,
            x500: 234,
           x1000: 202,
           x2000: 185)

puts "making tags"
tags = []
COUNT.times do
  tags << Tag.create(name: Faker::Hipster.words(2).join(" "))
end

puts "making cards"
cards = []
(COUNT * 3).times do |n|
  orientation = n % 2 == 0 ? "landscape"  : "portrait"
  catID = rand(Category.first.id..Category.last.id)

  large_img_url = n % 2 == 0 ? "https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/cards/aws_images/000/000/035/original/3kingsLAND.jpg" : "https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/cards/aws_images/000/000/037/original/old_santaPORT.jpg"

  medium_img_url = n % 2 == 0 ? "https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/cards/aws_images/000/000/035/medium/3kingsLAND.jpg" :
  "https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/cards/aws_images/000/000/037/medium/old_santaPORT.jpg"

  small_img_url = n % 2 == 0 ? "https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/cards/aws_images/000/000/035/thumb/3kingsLAND.jpg" :
  "https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/cards/aws_images/000/000/037/thumb/old_santaPORT.jpg"

  card = Card.create(
    name: Faker::Hipster.words(3).join(" "),
    category_id: catID,
    large_img_url: large_img_url,
    medium_img_url: medium_img_url,
    small_img_url:  small_img_url,
    default_greeting: Faker::Hipster.paragraph,
    orientation: orientation,
    size: "5x7",
    price_id: Price.last.id
  )
  cards << card
end

cards.each do |card|
  tags.shuffle!
  card.tags << tags[0]
  card.tags << tags[1]
  card.tags << tags[2]
end

puts "Making Users"
users = []
COUNT.times do
  user = User.new(email: Faker::Internet.email, password: "password", password_confirmation: "password", confirmed_at: DateTime.now)
  user.save!
  users << user
end
