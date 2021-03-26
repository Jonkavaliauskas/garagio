class Appointment < ApplicationRecord
    belongs_to :customer
    belongs_to :shop_owner

    validates :shop_id, presence: true
    validates :customer_id, presence: true
    validates :date, presence: true
    validates :car_issue, presence: true
    validates :last_quote, presence: true
    validates :invoice_number, presence: true   
end
