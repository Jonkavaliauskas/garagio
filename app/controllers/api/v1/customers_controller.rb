class Api::V1::CustomersController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    customers = Customer.all
    render json: customers
  end

  def create
    customer = Customer.new(customer_params)

    if customer.save
      render json: customer, include: [:appointments, :cars]
    else
      render json: { success: false, reason: "customer save not successful" }
    end
  end

  def show
    customer = Customer.find_by(id: params[:id])

    if customer
      render json: customer, include: [:appointments, :cars]
    else
      render json: { success: false, reason: "customer not found" }
    end
  end

  def update
    customer = Customer.find_by(id: params[:id])

    if customer
      if customer.update(customer_params)
        render json: customer, include: [:appointments, :cars]
      else
        render json: { success: false, reason: "customer update not successful" }
      end
    else
      render json: { success: false, reason: "customer not found" }
    end
  end

  def destroy
    Customer.find_by(id: params[:id]).destroy
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
