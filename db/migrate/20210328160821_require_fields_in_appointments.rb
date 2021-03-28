class RequireFieldsInAppointments < ActiveRecord::Migration[6.1]
  def change
    change_column :appointments, :shop_owner_id, :integer, null: false
    change_column :appointments, :car_id, :integer, null: false
    change_column_null :appointments, :car_issue, :integer, true
  end
end
