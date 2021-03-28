class RequireFieldsInCars < ActiveRecord::Migration[6.1]
  def change
      change_column :cars, :customer_id, :integer, null: false
  end
end
