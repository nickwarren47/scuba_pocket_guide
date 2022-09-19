class Diver < ApplicationRecord
    has_many :dive_logs 
    has_many :dive_sites, through: :dive_logs
end
