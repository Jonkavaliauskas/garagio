class CustomersController < ApplicationController

    before_action :current_customer
    before_action :require_authenticated
    skip_before_action :require_authenticated, only: [:new, :create]

    def show
        @customer = current_customer
    end

    def new
        if authenticated
            redirect_to 'customers/profile'
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
            byebug
            redirect_to 'customers/profile'
        else
            redirect_to '/'
        end
    end

    private

    def current_customer
        @current_customer = Customer.find_by(id: session[:customer_id])
    end

    def authenticated
        @current_customer && @current_customer.id != nil
    end

    def require_authenticated
        return redirect_to('/') unless authenticated
    end

end
