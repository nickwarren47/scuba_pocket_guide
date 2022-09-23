class DiveLogSerializer < ActiveModel::Serializer
  attributes :id, :dive_number, :dive_site_name, :dive_site_country, :date, :time_in, :time_out, :depth_achieved, :starting_psi, :ending_psi, :air_temp, :surface_temp, :bottom_temp, :fresh_or_salt_water, :shore_or_boat, :training_dive
  has_one :diver
  has_one :dive_site
end
