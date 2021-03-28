class Customer < ApplicationRecord
    #has_secure_password

    has_many :cars
    has_many :appointments
    has_many :shop_owners, through: :appointments
    has_many :reviews
    
    validates :name, presence: true
    validates :email, presence: true
end