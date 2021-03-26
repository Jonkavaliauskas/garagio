class ShopOwnerController < ApplicationController

    before_action :require_authenticated
    skip_before_action :require_authenticated, only: [:new, :create]

    def show
        @shop_owner = current_shop_owner
    end

    def new
        if shop_owner_authenticated
            redirect_to '/shop_owners/profile'
        end
        @shop_owner = ShopOwner.new
    end

    def create
        @shop_owner = ShopOwner.new(
            shop_name: params[:shop_name],
            email: params[:email],
            password: params[:password],
            password_confirmation: params[:password_confirmation]
        )
        if @shop_owner.save
            session[:shop_owner_id] = @shop_owner.id
            redirect_to '/shop_owners/profile'
        else
            redirect_to '/'
        end
    end

    private

    def require_authenticated
        return redirect_to('/') unless shop_owner_authenticated
    end

end
