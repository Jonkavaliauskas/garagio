class ShopOwner < ApplicationRecord
    #has_secure_password

    has_many :appointments
    has_many :customers, through: :appointments
    has_many :reviews
    
    validates :shop_name, presence: true
    validates :email, presence: true
end
