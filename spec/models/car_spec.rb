require 'rails_helper'

RSpec.describe Car, :type => :model do
    describe "Associations" do      
        it { should belong_to(:customer) }
        it { should have_many(:appointments) }
    end    
end