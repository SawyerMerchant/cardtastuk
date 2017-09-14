class Card < ApplicationRecord
  belongs_to :category
  belongs_to :price
  has_and_belongs_to_many :tags
  has_attached_file :aws_image, styles: { medium: "300x300", thumb: "100x100" }
  # validates_attachment_content_type :aws_image, content_type: /\Aimage\/.*\Z/
  do_not_validate_attachment_file_type :aws_image

  after_initialize :init
  after_create :make_links

    def init
      self.price_id  ||= Price.last.id
    end

    def make_links
      base = "https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/cards/aws_images/000/000/"# 031/thumb/treePORT.jpg
      number = sprintf '%03d', self.id
      name = self.aws_image_file_name
      self.small_img_url = "#{base}#{number}/thumb/#{name}"
      self.medium_img_url = "#{base}#{number}/medium/#{name}"
      self.large_img_url = "#{base}#{number}/original/#{name}"
      self.save
    end

end
