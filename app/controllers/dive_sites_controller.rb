class DiveSitesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    wrap_parameters format: []


    def index 
        dive_sites = DiveSite.all 
        render json: dive_sites, includes: ["dive_site_animals", "dive_site_animals.animals"], status: :ok 
    end 

    def show 
        dive_site = DiveSite.find(params[:id])
        render json: dive_site, status: :ok 
    end
end
