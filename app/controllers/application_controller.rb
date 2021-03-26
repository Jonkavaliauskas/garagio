class ApplicationController < ActionController::Base
    
    before_action :current_customer
    
    def current_customer
        @current_customer = Customer.find_by(id: session[:customer_id])
    end
    
    def customer_authenticated
        @current_customer && @current_customer.id != nil
    end
end
