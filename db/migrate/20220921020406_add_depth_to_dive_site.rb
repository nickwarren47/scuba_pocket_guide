class AddDepthToDiveSite < ActiveRecord::Migration[6.1]
  def change
    add_column :dive_sites, :depth, :integer
  end
end
