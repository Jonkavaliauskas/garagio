require 'rails_helper'

RSpec.describe Review, :type => :model do

  it "is not valid without a shop_owner_id" do
    review = Review.new(shop_owner_id: nil)
    expect(review).to_not be_valid
  end

  it "is not valid without a customer_id" do
    review = Review.new(customer_id: nil)
    expect(review).to_not be_valid
  end
end  