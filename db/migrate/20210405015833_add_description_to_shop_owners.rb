class AddDescriptionToShopOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :shop_owners, :description, :string, null: false
  end
end
