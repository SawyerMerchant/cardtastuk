class LineItem < ApplicationRecord
  belongs_to :order
  belongs_to :list
  belongs_to :card
end
