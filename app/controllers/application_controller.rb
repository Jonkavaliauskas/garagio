class ApplicationController < ActionController::Base
 
    before_action :current_customer
    before_action :current_shop_owner
    
    def current_customer
        @current_customer = Customer.find_by(id: session[:customer_id])
    end

    def customer_authenticated
        @current_customer && @current_customer.id != nil
    end

    def current_shop_owner
        @current_shop_owner = ShopOwner.find_by(id: session[:shop_owner_id])
    end

    def shop_owner_authenticated
        @current_shop_owner && @current_shop_owner.id != nil
    end

end
