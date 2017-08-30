require 'wicked_pdf'

task :pdf => :environment do

  newProof = Proof.create(line_item_id: LineItem.last.id)

  pdf = WickedPdf.new.pdf_from_url("http://localhost:3001/proofs/#{newProof.id}", :page_height => '10.25in', :page_width => '7.25in')

  file_name = "LineItem#{LineItem.last.id}"

  save_path = Rails.root.join('pdfs',"#{file_name}.pdf")

  File.open(save_path, 'wb') do |file|
    file << pdf
  end

end
task :pdf
