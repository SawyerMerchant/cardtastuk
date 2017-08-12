class Recipient < ApplicationRecord
  belongs_to :list
  has_one :address, as: :addressable, dependent: :destroy
end
