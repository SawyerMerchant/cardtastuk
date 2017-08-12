require 'wicked_pdf'


task :pdf => :environment do



  pdf = WickedPdf.new.pdf_from_url('http://localhost:3001/proofs/1', :page_height => '10.25in', :page_width => '7.25in')

  file_name = "1"

  save_path = Rails.root.join('pdfs',"#{file_name}.pdf")

  File.open(save_path, 'wb') do |file|
    file << pdf
  end

  # category_id = Category.last.id
  # price_id = Price.last.id
  #
  # Card.new(name: "Four!", category_id: category_id,  price_id: price_id).save

end
task :pdf
