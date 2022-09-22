class AddDescriptionToDiveSite < ActiveRecord::Migration[6.1]
  def change
    add_column :dive_sites, :description, :text
  end
end
