class Customer < ApplicationRecord
    has_secure_password
    
    validates :name, presence: true
    validates :phone, presence: true
    validates :email, presence: true
    validates :car_make, presence: true
    validates :car_model, presence: true
    validates :car_year, presence: true
    validates :car_fuel_type, presence: true
end

chad = Customer.new(name: "Chad", email: "chad.palmer@yale.edu", car_make: "Toyota", car_model: "Prius", car_year: 2007, car_fuel_type: "Gas", password: "12345", password_confirmation: "12345")
chad.save