class RequireFieldsInReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :shop_id, :integer
    add_column :reviews, :shop_owner_id, :integer, null: false
    change_column :reviews, :customer_id, :integer, null: false
  end
end
