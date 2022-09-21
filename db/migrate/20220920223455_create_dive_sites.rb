class CreateDiveSites < ActiveRecord::Migration[6.1]
  def change
    create_table :dive_sites do |t|
      t.string :name
      t.string :country
      t.string :image_url
      t.string :country_flag

      t.timestamps
    end
  end
end
