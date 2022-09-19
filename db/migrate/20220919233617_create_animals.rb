class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :common_name
      t.string :species_name
      t.integer :size
      t.string :image_url
      t.boolean :dangerous
      t.string :description

      t.timestamps
    end
  end
end
