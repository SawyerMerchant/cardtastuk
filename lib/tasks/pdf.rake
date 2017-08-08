require 'wicked_pdf'

task :pdf => :environment do



  pdf = WickedPdf.new.pdf_from_string('<h1>Kings There!</h1><img src="https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/cards/aws_images/000/000/035/original/3kingsLAND.jpg">')

  file_name = "four"

  save_path = Rails.root.join('pdfs',"#{file_name}.pdf")

  File.open(save_path, 'wb') do |file|
    file << pdf
  end

  category_id = Category.last.id
  price_id = Price.last.id

  Card.new(name: "Four!", category_id: category_id,  price_id: price_id).save

end
task :pdf
