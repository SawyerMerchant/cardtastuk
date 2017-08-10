class LineItem < ApplicationRecord
  belongs_to :order
  belongs_to :list
  belongs_to :card
  has_attached_file :autograph
  # validates_attachment :autograph, content_type: { content_type: "image/jpeg" }
  do_not_validate_attachment_file_type :autograph
end
