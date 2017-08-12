class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :lists
  has_many :orders

  has_one :billing_address, as: :addressable,
          class_name: "Address"#, dependent: :destroy, foreign_key: "addressable_id"

  has_one :return_address, as: :addressable,
          class_name: "Address"#, dependent: :destroy, foreign_key: "addressable_id"

  def as_json(options={})
    super(options).merge({lists: self.lists, orders: self.orders})
  end

end
