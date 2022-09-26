class DiveSiteAnimalSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :dive_site
  has_one :animal
end
