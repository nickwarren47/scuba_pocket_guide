class CreateDivers < ActiveRecord::Migration[6.1]
  def change
    create_table :divers do |t|
      t.string :name
      t.string :country_from
      t.string :diver_cert_level
      t.integer :age
      t.boolean :disclaimer
      t.string :email
      t.string :password_digest
      t.string :avatar

      t.timestamps
    end
  end
end
