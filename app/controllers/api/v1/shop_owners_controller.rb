class Api::V1::ShopOwnersController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    shop_owners = ShopOwner.all
    render json: shop_owners
  end

  def create
    ShopOwner.create(shop_owner_params)
  end

  def show
    shop_owner = ShopOwner.find(params[:id])
    render json: shop_owner, include: [:appointments, :reviews], methods: :average_review
  end

  def update
    shop_owner = ShopOwner.find(params[:id])
    shop_owner.update(shop_owner_params)
  end

  def destroy
    ShopOwner.find(params[:id]).destroy
  end

  private

  def shop_owner_params
    params.permit(
      :shop_name,
      :email,
      :phone,
      :address,
      :hours
    )
  end

end
