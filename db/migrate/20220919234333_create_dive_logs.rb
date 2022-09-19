class CreateDiveLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dive_logs do |t|
      t.belongs_to :diver, null: false, foreign_key: true
      t.belongs_to :dive_site, null: false, foreign_key: true
      t.integer :dive_number
      t.string :dive_site_name
      t.date :date
      t.datetime :time_in
      t.datetime :time_out
      t.integer :depth
      t.integer :starting_psi
      t.integer :ending_psi
      t.integer :air_temp
      t.integer :surface_temp
      t.integer :bottom_temp
      t.boolean :fresh_or_salt_water
      t.boolean :shore_or_boat
      t.boolean :training_dive

      t.timestamps
    end
  end
end
