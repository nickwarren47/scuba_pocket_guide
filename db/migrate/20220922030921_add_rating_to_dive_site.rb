class AddRatingToDiveSite < ActiveRecord::Migration[6.1]
  def change
    add_column :dive_sites, :rating, :integer
  end
end
