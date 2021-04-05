class Api::V1::CarsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    cars = Car.all
    render json: cars, include: [:customer]
  end

  def create
    car = Car.new(car_params)

    if car.save
      render json: car, include: [:customer]
    else
      render json: { success: false, reason: "car save not successful" }
    end
  end

  def show
    car = Car.find_by(id: params[:id])

    if car  
      render json: car, include: [:customer]
    else
      render json: { success: false, reason: "car not found" }
    end
  end

  def update
    car = Car.find_by(id: params[:id])

    if car
      if car.update(car_params)
        render json: car, include: [:customer]
      else
        render json: { success: false, reason: "car update not successful" }
      end
    else
      render json: { success: false, reason: "car not found" }
    end
  end

  def destroy
    Car.find_by(id: params[:id]).destroy

    cars = Car.all
    render json: cars
  end

  private

  def car_params
    params.permit(
      :customer_id,
      :make,
      :model,
      :year,
      :body_style
    )
  end
end
