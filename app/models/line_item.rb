class LineItem < ApplicationRecord
  belongs_to :order
  belongs_to :list
  belongs_to :card
  has_attached_file :autograph #, content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
  validates_attachment :autograph, content_type: { content_type: 'image/png' }
  do_not_validate_attachment_file_type :autograph
  has_many :proofs

  def async_create_proof
    Resque.enqueue(Proof, self.id)
  end

end
