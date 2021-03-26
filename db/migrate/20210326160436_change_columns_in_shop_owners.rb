class ChangeColumnsInShopOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :shop_owners, :phone, :string
    remove_column :shop_owners, :address, :string
    remove_column :shop_owners, :hours, :string
    add_column :shop_owners, :phone, :string
    add_column :shop_owners, :address, :string
    add_column :shop_owners, :hours, :string
  end
end
