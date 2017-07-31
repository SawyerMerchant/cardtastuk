class Card < ApplicationRecord
  belongs_to :category
  belongs_to :price
  has_and_belongs_to_many :tags
end
