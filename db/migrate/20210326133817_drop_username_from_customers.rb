class DropUsernameFromCustomers < ActiveRecord::Migration[6.1]
  def change
    remove_column :customers, :username, :string
  end
end
