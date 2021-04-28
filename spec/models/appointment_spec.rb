require 'rails_helper'

RSpec.describe Appointment, :type => :model do
  describe "Validations" do
    it "is not valid without a shop_owner_id" do
      appointment = Appointment.new(shop_owner_id: nil)
      expect(appointment).to_not be_valid
    end

    it "is not valid without a customer_id" do
      appointment = Appointment.new(customer_id: nil)
      expect(appointment).to_not be_valid
    end
  end
  
  describe "Associations" do 
    it { should belong_to(:customer) }
    it { should belong_to(:shop_owner) } 
    it { should belong_to(:car) }    
  end 

end  