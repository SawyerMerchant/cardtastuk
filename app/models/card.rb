class Card < ApplicationRecord
  belongs_to :category
  belongs_to :price
  has_and_belongs_to_many :tags
  has_attached_file :aws_image, styles: { medium: "300x300", thumb: "100x100" }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
end
