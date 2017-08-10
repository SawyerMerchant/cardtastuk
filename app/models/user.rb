class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :lists
  has_many :orders
  belongs_to :billing_address, class_name: "Address" #or has_one address, foreign_key: 'x_address
  belongs_to :shipping_address, class_name: "Address" #or has_one address, foreign_key: 'x_address

  def as_json(options={})
    super(options).merge({lists: self.lists, orders: self.orders})
  end

end
