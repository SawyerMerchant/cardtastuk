require 'wicked_pdf'

task :pdf => :environment do



  pdf = WickedPdf.new.pdf_from_string('<h1>Kings There!</h1><img src="https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/cards/aws_images/000/000/035/original/3kingsLAND.jpg">')

  file_name = "three"

  save_path = Rails.root.join('pdfs',"#{file_name}.pdf")

  File.open(save_path, 'wb') do |file|
    file << pdf
  end


end
task :pdf
