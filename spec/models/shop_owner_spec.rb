require 'rails_helper'

RSpec.describe ShopOwner, :type => :model do

  it "is not valid without a shop name" do
    shop_owner = ShopOwner.new(shop_name: nil)
    expect(shop_owner).to_not be_valid
  end

  it "is not valid without an email" do
    shop_owner = ShopOwner.new(email: nil)
    expect(shop_owner).to_not be_valid
  end
end  