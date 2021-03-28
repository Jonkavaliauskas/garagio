class FixShopOwnerIdInAppointments < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :shop_id, :integer
    add_column :appointments, :shop_owner_id, :integer
  end
end
