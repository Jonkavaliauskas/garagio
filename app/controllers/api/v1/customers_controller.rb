class Api::V1::CustomersController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    customers = Customer.all
    render json: customers
  end

  def create
    Customer.create(customer_params)
  end

  def show
    customer = Customer.find(params[:id])
    render json: customer, include: [:appointments, :cars]
  end

  def update
    customer = Customer.find(params[:id])
    customer.update(customer_params)
  end

  def destroy
    Customer.find(params[:id]).destroy
  end

  private

  def customer_params
    params.permit(
      :name,
      :email,
      :phone
    )
  end

end
