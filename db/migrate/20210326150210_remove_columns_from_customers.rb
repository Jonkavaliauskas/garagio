class RemoveColumnsFromCustomers < ActiveRecord::Migration[6.1]
  def change
    remove_column :customers, :car_make, :string
    remove_column :customers, :car_model, :string
    remove_column :customers, :car_year, :integer
    remove_column :customers, :car_fuel_type, :string
  end
end