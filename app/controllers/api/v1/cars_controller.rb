class Api::V1::CarsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    cars = Car.all
    render json: cars, include: [:customer]
  end

  def create
    Car.create(car_params)
  end

  def show
    car = Car.find(params[:id])
    render json: car, include: [:customer]
  end

  def update
    car = Car.find(params[:id])
    car.update(car_params)
  end

  def destroy
    Car.find(params[:id]).destroy
  end

  private

  def car_params
    params.permit(
      :customer_id,
      :make,
      :model,
      :year,
      :fuel_type
    )
  end
end
