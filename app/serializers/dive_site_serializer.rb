class DiveSiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :rating, :avg_depth, :diver_skill_level, :country, :image_url, :country_flag

  
  has_many :animals
end
