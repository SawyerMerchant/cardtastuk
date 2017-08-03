class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :lists

  def as_json(options={})
    super(options).merge({lists: self.lists})
  end

end
