class ShopOwner < ApplicationRecord
    #has_secure_password

    has_many :appointments
    has_many :customers, through: :appointments
    has_many :reviews
    
    validates :shop_name, presence: true
    validates :email, presence: true

    def average_review
        if (self.reviews.size != 0)
            return self.reviews.reduce(0) { |sum, review| sum += review.rating } / self.reviews.size.to_f
        else
            return -1
        end
    end
end
