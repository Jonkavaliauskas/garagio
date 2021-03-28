class AddAppointmentsToCars < ActiveRecord::Migration[6.1]
  def change
    add_column :cars, :appoitnment_id, :integer
  end
end
