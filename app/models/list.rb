class List < ApplicationRecord
  belongs_to :user
  has_attached_file :url
  # do_not_validate_attachment_file_type :url
  validates_attachment_content_type :url, :content_type => ['text/csv','text/comma-separated-values','text/csv','application/csv','application/excel','application/vnd.ms-excel','application/vnd.msexcel','text/anytext','text/plain']



  has_many :recipients

  def as_json(options={})
    super(options).merge({count: self.recipients.count,
                   first_record: self.recipients.first   })
  end

end
