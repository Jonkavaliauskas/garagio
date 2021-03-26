class Customer < ApplicationRecord
    has_secure_password

    has_many :cars
    
    validates :name, presence: true
    validates :email, presence: true
end