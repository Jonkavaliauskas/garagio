require 'rails_helper'

RSpec.describe Review, :type => :model do
  
  subject {
    described_class.new(rating: "4",
                        assessment: "Lorem ipsum",
                        created_at: DateTime.now,
                        updated_at: DateTime.now + 1.week,
                        customer_id: nil,
                        shop_owner_id: nil)
  }
  describe "Validations" do
    it "is not valid without a shop_owner_id" do
      review = Review.new(shop_owner_id: nil)
      expect(review).to_not be_valid
    end

    it "is not valid without a customer_id" do
      review = Review.new(customer_id: nil)
      expect(review).to_not be_valid
    end
  end  
  
  describe "Associations" do 
    it { should belong_to(:customer) }
    it { should belong_to(:shop_owner) }     
  end 
  
end  