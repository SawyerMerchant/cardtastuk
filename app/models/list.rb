class List < ApplicationRecord
  belongs_to :user
  has_attached_file :url
  validates_attachment :url, content_type: { content_type: ["application/vnd.ms-excel"] }
  #TODO add "application/vnd.ms-excel"
end
