class AddCarsToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :car_id, :integer
  end
end
