class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.integer :customer_id
      t.string :make
      t.string :model
      t.integer :year
      t.string :fuel_type

      t.timestamps
    end
  end
end
