class CreateVehicleInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicle_infos do |t|
      t.bigint :year
      t.string :make
      t.string :model
      t.string :body_styles, array: true, default: []

      t.timestamps
    end
  end
end
