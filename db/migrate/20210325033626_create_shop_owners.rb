class CreateShopOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :shop_owners do |t|
      t.string :shop_name, null: false
      t.string :phone, null: false
      t.string :email, null: false
      t.string :address, null: false
      t.string :hours, null: false

      t.timestamps
    end
  end
end
