require 'wicked_pdf'

require 'capybara'
require 'phantomjs'
require 'capybara/poltergeist'

class Proof < ApplicationRecord
  belongs_to :line_item
  @queue = :proofs


  def self.perform(line_item_id)
    ActiveRecord::Base.clear_active_connections!

    base_url = Rails.env == "production" ? "http://cardtastuk.herokuapp.com" : "http://localhost:3001"

    proof = Proof.create(line_item_id: line_item_id)
    session = Capybara::Session.new(:poltergeist)
    # session.visit "http://localhost:3001/api/v1/proofs/10"
    session.visit "#{base_url}/api/v1/proofs/#{proof.id}"
    page = Nokogiri::HTML.parse(session.source)
    greetingTextHtml = page.css('[id="greeting-text"]').to_html
    backHalf = greetingTextHtml.split("font-size: ")[1]
    fontSize = backHalf[0..1]
    proof.font_size = fontSize
    proof.save


    pdf = WickedPdf.new.pdf_from_url("#{base_url}/api/v1/proofs/#{proof.id}", page_height: '10.25in', page_width: '7.25in')


    file_name = "#{Time.now.to_i}_#{line_item_id}.pdf"
    save_path = Rails.root.join('pdfs',"#{file_name}.pdf")
    File.open(save_path, 'wb') do |file|
      file << pdf
    end

    # temp = Tempfile.new("#{Time.now.to_i}_#{line_item_id}.pdf")
    # temp = File.new("#{Time.now.to_i}_#{line_item_id}.pdf")
    # temp.write(pdf)
    # temp.close
    # temp.path
  end


  def self.generate(line_item_id)
    proof = Proof.create(line_item_id: line_item_id)
    p proof.id
    html = ProofsController.render :show#, id: 48
    pdf = WickedPdf.new.pdf_from_string(html)
    # temp = Tempfile.new("#{Time.now.to_i}_#{line_item_id}.pdf")
    temp = File.new("#{Time.now.to_i}_#{line_item_id}.pdf")

    temp.write(pdf)
    temp.close
    temp.path
    # Probably upload this to S3 or similar at this point
    # Notify the user that it's now available somehow
  end
end
