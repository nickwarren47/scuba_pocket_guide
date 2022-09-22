class AddDiverSkillLevelToDiveSite < ActiveRecord::Migration[6.1]
  def change
    add_column :dive_sites, :diver_skill_level, :string
  end
end
