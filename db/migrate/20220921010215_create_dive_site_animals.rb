class CreateDiveSiteAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :dive_site_animals do |t|
      t.belongs_to :dive_site, null: false, foreign_key: true
      t.belongs_to :animal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
