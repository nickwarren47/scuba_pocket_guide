class AddDepthToDiveSite < ActiveRecord::Migration[6.1]
  def change
    add_column :dive_sites, :avg_depth, :integer
  end
end
