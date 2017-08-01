if Rails.env == "development"
  puts "Reset Database"
  Rake::Task['db:migrate:reset'].invoke
end

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

COUNT = 10

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
  catID = rand(1..10)

  card = Card.create(
    name: Faker::Hipster.words(3).join(" "),
    category_id: catID,
    large_img_url: "https://s3-us-west-2.amazonaws.com/cards201606/arts/images/000/000/003/original/christmas_decoration_on_tree_187371.jpg",
    medium_img_url: "https://s3-us-west-2.amazonaws.com/cards201606/arts/images/000/000/003/medium/christmas_decoration_on_tree_187371.jpg",
    small_img_url:  "https://s3-us-west-2.amazonaws.com/cards201606/arts/images/000/000/003/thumb/christmas_decoration_on_tree_187371.jpg",
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
