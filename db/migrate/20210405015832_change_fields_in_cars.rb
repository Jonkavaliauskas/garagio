class ChangeFieldsInCars < ActiveRecord::Migration[6.1]
  def change
    remove_column :cars, :fuel_type, :string
    add_column :cars, :body_style, :string
    add_column :cars, :info, :string
  end
end
