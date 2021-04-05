class Api::V1::AppointmentsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    appointments = Appointment.all
    render json: appointments
  end

  def create
    appointment = Appointment.new(appointment_params)

    if appointment.save
      render json: appointment, include: [:customer, :shop_owner, :car]
    else
      render json: { success: false, reason: "appointment save not successful" }
    end
  end

  def show
    appointment = Appointment.find_by(id: params[:id])

    if appointment
      render json: appointment, include: [:customer, :shop_owner, :car]
    else
      render json: { success: false, reason: "appointment not found" }
    end
  end

  def update
    appointment = Appointment.find_by(id: params[:id])

    if appointment
      if appointment.update(appointment_params)
        render json: appointment, include: [:customer, :shop_owner, :car]
      else
        render json: { success: false, reason: "appointment update not successful" }
      end
    else
      render json: { success: false, reason: "appointment not found" }
    end
  end

  def destroy
    Appointment.find_by(id: params[:id]).destroy

    appointments = Appointment.all
    render json: appointments
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
    p['date'] = DateTime.strptime(p['date'], '%Y-%m-%dT%H:%M')

    return p
  end
end