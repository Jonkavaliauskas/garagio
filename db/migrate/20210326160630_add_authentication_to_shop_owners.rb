class AddAuthenticationToShopOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :shop_owners, :password_digest, :string
  end
end
