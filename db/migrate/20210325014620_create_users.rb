class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.boolean :type
      t.string :name
      t.integer :phone
      t.string :email
      t.string :car_make
      t.string :car_model
      t.integer :car_year
      t.boolean :car_fuel_type

      t.timestamps
    end
  end
end
