class DiveSiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :image_url, :country_flag
end
