class RemoveAppointmentFromCars < ActiveRecord::Migration[6.1]
  def change
    remove_column :cars, :appoitnment_id, :integer
  end
end
