class ChangePhoneInCustomers < ActiveRecord::Migration[6.1]
  def change
    remove_column :customers, :phone, :string
    add_column :customers, :phone, :string
  end
end
