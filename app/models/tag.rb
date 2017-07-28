class Tag < ApplicationRecord
  has_many :card_tags
  has_many :cards, through: :card_tags
end
