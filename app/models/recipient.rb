class Recipient < ApplicationRecord
  belongs_to :list
  belongs_to :address
end
