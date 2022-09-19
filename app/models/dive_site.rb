class DiveSite < ApplicationRecord
    has_many :dive_site_animals
    has_many :animals, through: :dive_site_animals

    has_many :dive_logs
    has_many :divers, through: :dive_logs
end
