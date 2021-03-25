class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :shop_id, null: false
      t.integer :customer_id, null: false
      t.datetime :date, null: false
      t.string :car_issue, null: false
      t.float :last_quote
      t.integer :invoice_number

      t.timestamps
    end
  end
end
