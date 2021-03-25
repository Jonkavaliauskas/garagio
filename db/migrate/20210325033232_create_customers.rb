class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name, null: false
      t.string :phone, null: false
      t.string :email, null: false
      t.string :car_make, null: false
      t.string :car_model, null: false
      t.integer :car_year, null: false
      t.string :car_fuel_type, null: false

      t.timestamps
    end
  end
end
