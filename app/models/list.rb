class List < ApplicationRecord
  belongs_to :user
  has_attached_file :url
  do_not_validate_attachment_file_type :url
  # validates_attachment_content_type :data, :content_type => ['text/csv','text/comma-separated-values','text/csv','application/csv','application/excel','application/vnd.ms-excel','application/vnd.msexcel','text/anytext','text/plain']


end
