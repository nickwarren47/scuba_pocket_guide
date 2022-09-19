class DiveLog < ApplicationRecord
  belongs_to :diver
  belongs_to :dive_site
end
