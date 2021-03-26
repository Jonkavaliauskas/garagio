class SessionsController < ApplicationController
    def newcustomer
    end

    def createcustomer
        customer = Customer.find_by(email: params[:email])
        if customer && customer.authenticate(params[:password])
            session[:customer_id] = customer.id
            redirect_to '/customers/profile'
        else
            redirect_to '/'
        end
    end

    def destroycustomer
        session[:customer_id] = nil
        redirect_to '/'
    end
end
