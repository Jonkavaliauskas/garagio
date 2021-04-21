class Api::V1::ShopOwnersController < ApplicationController
  protect_from_forgery with: :null_session

  before_action :authenticate_request, only: [ :me ]
  
  # http://127.0.0.1:3000/api/v1/shop_owners/index?address=344+College+street+New+Haven+CT&distance=5
  # http://127.0.0.1:3000/api/v1/shop_owners/index?lat=41.309368&lng=-72.927872&distance=10.5
  # distance without location returns all
  # location without distance returns all, with distances
  def me
    shop_owner = ShopOwner.find_by(id: @current_shop_owner.id)

    if shop_owner
      render json: shop_owner, include: [:appointments, :reviews], methods: :average_review
    else
      render json: { success: false, reason: "shop owner not found" }
    end
  end

  def index
    # lookup by email, return user show page
    if params[:email]
      shop_owner = ShopOwner.find_by(email: params[:email])
      
      if shop_owner
        render json: shop_owner, include: [:appointments, :reviews], methods: :average_review
      else
        render json: { success: false, reason: "shop owner not found" }
      end
    else
      if params[:address]
        location = params[:address]
      elsif params[:lat] and params[:lng]
        location = [params[:lat], params[:lng]]
      end
  
      if location
        # render sorted and distance filtered index page
        if params[:distance]
          shop_owners = ShopOwner.within(params[:distance], :origin=>location)
        else
          shop_owners = ShopOwner.all
        end
  
        result = ShopOwner.json_with_distance(shop_owners, location)
        render json: result
      else
        # render index page
        shop_owners = ShopOwner.all
        render json: shop_owners, methods: :average_review
      end
    end
  end

  def create
    shop_owner = ShopOwner.new(shop_owner_params)
    
    if (shop_owner.save)
      render json: shop_owner, include: [:appointments, :reviews], methods: :average_review
    else
      render json: { success: false, reason: "shop owner save not successful" }
    end
  end

  def show
    shop_owner = ShopOwner.find_by(id: params[:id])

    if shop_owner
      render json: shop_owner, include: [:appointments, :reviews], methods: :average_review
    else
      render json: { success: false, reason: "shop owner not found" }
    end
  end

  def update
    shop_owner = ShopOwner.find_by(id: params[:id])

    if shop_owner
      if shop_owner.update(shop_owner_params)
        render json: shop_owner, include: [:appointments, :reviews], methods: :average_review
      else
        render json: { success: false, reason: "shop owner save not successful" }
      end
    else
      render json: { success: false, reason: "shop owner not found" }
    end
  end

  def destroy
    ShopOwner.find_by(id: params[:id]).destroy
  end

  private

  def shop_owner_params
    params.permit(
      :shop_name,
      :email,
      :phone,
      :address,
      :hours,
      :description,
      :password,
      :password_confirmation
    )
  end

end
