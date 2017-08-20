class Proof < ApplicationRecord
  belongs_to :line_item




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
