# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'


chad = Customer.new(name: "Chad", email: "chad.palmer@yale.edu", password: "12345", password_confirmation: "12345")
chad.save

car = Car.create(customer: chad, make: "Toyota", model: "Prius")

# Ingests from CSV to seed vehicle_info db
csv_text = File.read(Rails.root.join('db', 'lib', 'seeds', 'vehicle_info_seed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    t = VehicleInfo.new
    t.year = row['year']
    t.make = row['make']
    t.model = row['model']
    t.body_styles = row['body_styles']
    t.save
end