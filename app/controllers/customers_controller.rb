class CustomersController < ApplicationController

    before_action :require_authenticated
    skip_before_action :require_authenticated, only: [:new, :create]

    def show
        @customer = current_customer
    end

    def new
        if customer_authenticated
            redirect_to '/customers/profile'
        end
        @customer = Customer.new
    end

    def create
        @customer = Customer.new(
            name: params[:name],
            email: params[:email],
            password: params[:password],
            password_confirmation: params[:password_confirmation]
        )
        if @customer.save
            session[:customer_id] = @customer.id
            redirect_to '/customers/profile'
        else
            redirect_to '/'
        end
    end

    private

    def require_authenticated
        return redirect_to('/') unless customer_authenticated
    end

end
