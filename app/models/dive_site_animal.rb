class DiveSiteAnimal < ApplicationRecord
  belongs_to :dive_site
  belongs_to :animal
end
