class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :common_name, :species_name, :size, :image_url, :dangerous, :description
end
