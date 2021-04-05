class Api::V1::AppointmentsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    appointments = Appointment.all
    render json: appointments
  end

  def create
    Appointment.create(appointment_params)
  end

  def show
    appointment = Appointment.find(params[:id])
    render json: appointment, include: [:customer, :shop_owner, :car]
  end

  def update
    appointment = Appointment.find(params[:id])
    appointment.update(appointment_params)
  end

  def destroy
    Appointment.find(params[:id]).destroy
  end

  private

  # appointment post/patch expects '%Y-%m-%dT%H:%M' format (e.g. '1999-10-28T13:01')
  def appointment_params
    p = params.permit(
      :customer_id,
      :shop_owner_id,
      :date,
      :car_issue,
      :last_quote,
      :invoice_number
    )
    if p['date']
      p['date'] = DateTime.strptime(p['date'], '%Y-%m-%dT%H:%M')
    end
    return p
  end
end