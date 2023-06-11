class User < ApplicationRecord
    has_secure_password
    has_many :comments, dependent: :destroy
    has_many :animals, through: :comments

    validates :username, :email_address, presence: true
    vlaidates :username, uniqueness: true
    validates :email_address, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i }
end
