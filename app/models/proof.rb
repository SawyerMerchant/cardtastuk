class Proof < ApplicationRecord
  belongs_to :line_item




  # pdf = WickedPdf.new.pdf_from_url('http://localhost:3001/proofs/1', :page_height => '10.25in', :page_width => '7.25in')
  #
  # file_name = "1"
  #
  # save_path = Rails.root.join('pdfs',"#{file_name}.pdf")
  #
  # File.open(save_path, 'wb') do |file|
  #   file << pdf
  # end
end
