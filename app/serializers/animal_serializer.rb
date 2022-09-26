class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :species_name, :size, :image_url, :dangerous, :description

  has_many :dive_site_animals
end
