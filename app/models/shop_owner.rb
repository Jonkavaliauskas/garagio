class ShopOwner < ApplicationRecord
    has_secure_password
    acts_as_mappable :auto_geocode=>true

    has_many :appointments
    has_many :customers, through: :appointments
    has_many :reviews
    
    validates :shop_name, presence: true
    validates :email, presence: true, uniqueness: true

    def average_review
        if (self.reviews.size != 0)
            return self.reviews.reduce(0) { |sum, review| sum += review.rating } / self.reviews.size.to_f
        else
            return -1
        end
    end

    def self.json_with_distance(shop_owners, location)
        result = []
        shop_owners.each do |shop_owner|
            distance_to = shop_owner.distance_to(location)
            shop_owner_json = shop_owner.as_json
            shop_owner_json["distance_to_location"] = distance_to.round(2)
            shop_owner_json["average_review"] = shop_owner.average_review
            result.append(shop_owner_json)
        end
        
        result = result.sort_by {|s| s["distance_to_location"] }

        return result
    end
end
