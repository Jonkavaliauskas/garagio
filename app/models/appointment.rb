class Appointment < ApplicationRecord
    belongs_to :customer
    belongs_to :shop_owner

    validates :shop_id, presence: true
    validates :customer_id, presence: true
end
