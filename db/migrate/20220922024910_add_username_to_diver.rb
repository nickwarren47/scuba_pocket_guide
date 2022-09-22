class AddUsernameToDiver < ActiveRecord::Migration[6.1]
  def change
    add_column :divers, :username, :string
  end
end
