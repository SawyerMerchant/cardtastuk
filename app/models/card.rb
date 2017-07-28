class Card < ApplicationRecord
  belongs_to :category
  has_many :cards_tags
  has_many :tags, through: :cards_tags
end
