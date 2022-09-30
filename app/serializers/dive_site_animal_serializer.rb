class DiveSiteAnimalSerializer < ActiveModel::Serializer
  attributes :id
  has_one :dive_site
  has_one :animal
end
