# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Customer.destroy_all
Car.destroy_all
ShopOwner.destroy_all
Appointment.destroy_all
Review.destroy_all

chad = Customer.create(name: "Chad", email: "chad.palmer@yale.edu")
jonas = Customer.create(name: "Jonas", email: "jonas@yale.edu")
carl = Customer.create(name: "Carl", email: "carl@yale.edu")
nico = Customer.create(name: "Nico", email: "nico@yale.edu")

prius = Car.create(customer: chad, make: "Toyota", model: "Prius", year: 2007)
bugatti = Car.create(customer: chad, make: "Bugatti", model: "Veyron", year: 2011)

carguys = ShopOwner.create(shop_name: "Car Guys", email: "car_guys@gmail.com", address: "90 Prospect St, New Haven, CT 06511")
jeffcars = ShopOwner.create(shop_name: "Jeff Cars", email: "jeff_cars@gmail.com", address: "304 York St, New Haven, CT 06511")

a1 = Appointment.create(shop_owner: carguys, customer: chad, car: prius, date: DateTime.now, car_issue: "ac broke")

r1 = Review.create(shop_owner: carguys, customer: chad, rating: 5, assessment: "fixed issue quickly and correctly!")