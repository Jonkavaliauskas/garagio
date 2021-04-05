class EmailColumnUniqueInShopOwner < ActiveRecord::Migration[6.1]
  def change
    change_column :shop_owners, :email, :string, unique: true
  end
end
