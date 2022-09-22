class DiveLog < ApplicationRecord
  belongs_to :diver
  belongs_to :dive_site

  validates :dive_site_name, :dive_site_country, :date, :depth, :starting_psi, :ending_psi, presence: true
  validates :air_temp, :surface_temp, :bottom_temp, numericality: { only_integer: true }

end
