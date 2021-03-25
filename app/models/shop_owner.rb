class ShopOwner < ApplicationRecord
    validates :shop_name, presence: true
    validates :phone, presence: true
    validates :email, presence: true
    validates :address, presence: true
    validates :hours, presence: true
end
