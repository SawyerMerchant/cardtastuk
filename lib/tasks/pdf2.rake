require 'wicked_pdf'

require 'capybara'
require 'phantomjs'
require 'capybara/poltergeist'

task :pdf2 => :environment do

  # @proof = LineItem.last.proofs.build().save

  session = Capybara::Session.new(:poltergeist)
  session.visit "http://localhost:3001/proofs/10"
  page = Nokogiri::HTML.parse(session.source)
  greetingTextHtml = page.css('[id="greeting-text"]').to_html
  backHalf = greetingTextHtml.split("font-size: ")[1]
  p fontSize = backHalf[0..1]



#   @proof = Proof.first
#   ################################################
#   pdf = WickedPdf.new.pdf_from_url("http://localhost:3001/proofs/#{@proof.id}", page_height: '10.25in', page_width: '7.25in', window_status: "")
#
#   # ac = ActionController::Base.new()
#   # html_string = ac.render_to_string template: 'proofs/show', locals: {proof: @proof}, layout: 'landscapeInside'
#   #
#   # pdf = WickedPdf.new.pdf_from_string(
#   #   html_string
#   # )
#
#
# ################################################
#
#   file_name = "LineItem#{LineItem.last.id}"
#
#   save_path = Rails.root.join('pdfs',"#{file_name}.pdf")
#
#   File.open(save_path, 'wb') do |file|
#     file << pdf
#   end

end
task :pdf2
