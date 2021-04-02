class AddGeocodingToShopOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :shop_owners, :lat, :float, null: false
    add_column :shop_owners, :lng, :float, null: false
    change_column :shop_owners, :address, :string, null: false
  end
end
