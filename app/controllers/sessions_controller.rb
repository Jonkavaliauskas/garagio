class SessionsController < ApplicationController
    def newcustomer
        if customer_authenticated
            redirect_to '/customers/profile'
        end
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

    def newshop_owner
        if shop_owner_authenticated
            redirect_to '/shop_owners/profile'
        end
    end

    def createshop_owner
        shop_owner = ShopOwner.find_by(email: params[:email])
        if shop_owner && shop_owner.authenticate(params[:password])
            session[:shop_owner_id] = shop_owner.id
            redirect_to '/shop_owners/profile'
        else
            redirect_to '/'
        end
    end

    def destroyshop_owner
        session[:shop_owner_id] = nil
        redirect_to '/'
    end
end
