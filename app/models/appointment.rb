class Appointment < ApplicationRecord
    belongs_to :customer
    belongs_to :shop_owner
    belongs_to :car

    validates :shop_owner_id, presence: true
    validates :customer_id, presence: true
end
