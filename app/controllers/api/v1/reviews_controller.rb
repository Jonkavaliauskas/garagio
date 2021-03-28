class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    Review.create(review_params)
  end

  def show
    review = Review.find(params[:id])
    render json: review, include: [:customer, :shop_owner]
  end

  def update
    review = Review.find(params[:id])
    review.update(review_params)
  end

  def destroy
    Review.find(params[:id]).destroy
  end

  private

  def review_params
    params.permit(
      :customer_id,
      :shop_owner_id,
      :rating,
      :assessment
    )
  end
end
