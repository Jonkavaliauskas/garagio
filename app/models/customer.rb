class Customer < ApplicationRecord
    validates :name, presence: true
    validates :phone, presence: true
    validates :email, presence: true
    validates :car_make, presence: true
    validates :car_model, presence: true
    validates :car_year, presence: true
    validates :car_fuel_type, presence: true
end
