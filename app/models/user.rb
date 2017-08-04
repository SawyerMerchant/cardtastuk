class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :lists
  has_many :orders

  def as_json(options={})
    super(options).merge({lists: self.lists, orders: self.orders})
  end

end
