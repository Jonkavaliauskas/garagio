require 'rails_helper'

RSpec.describe Customer, :type => :model do
  describe "Validations" do
    it "is not valid without a name" do
      customer = Customer.new(name: nil)
      expect(customer).to_not be_valid
    end

    it "is not valid without an email" do
      customer = Customer.new(email: nil)
      expect(customer).to_not be_valid
    end
  end
 
  describe "Associations" do      
    it { should have_many(:appointments) }
    it { should have_many(:shop_owners) }
    it { should have_many(:cars) }
    it { should have_many(:reviews) }
  end    
end  