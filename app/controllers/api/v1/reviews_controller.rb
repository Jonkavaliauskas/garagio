class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    review = Review.new(review_params)

    if review.save
      render json: review, include: [:customer, :shop_owner]
    else
      render json: { success: false, reason: "review save not successful" }
    end
  end

  def show
    review = Review.find_by(id: params[:id])

    if review
      render json: review, include: [:customer, :shop_owner]
    else
      render json: { success: false, reason: "review not found" }
    end
  end

  def update
    review = Review.find_by(id: params[:id])

    if review
      if review.update(review_params)
        render json: review, include: [:customer, :shop_owner]
      else
        render json: { success: false, reason: "review save not successful" }
      end
    else
      render json: { success: false, reason: "review not found" }
    end
  end

  def destroy
    Review.find_by(id: params[:id]).destroy
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
