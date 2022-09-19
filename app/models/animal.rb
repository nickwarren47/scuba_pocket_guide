class Animal < ApplicationRecord
    has_many :dive_site_animals
    has_many :dive_sites, through: :dive_site_animals
end
