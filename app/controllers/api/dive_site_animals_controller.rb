class Api::DiveSiteAnimalsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    wrap_parameters format: []

    def index 
        divesiteanimals = DiveSiteAnimal.all
        render json: divesiteanimals, status: :ok
    end 

    def show 
        divesiteanimal = DiveSiteAnimal.find(params[:id])
        render json: divesiteanimal, status: :ok
    end 

end
