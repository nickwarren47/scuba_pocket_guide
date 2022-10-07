class Api::AnimalsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    wrap_parameters format: []

    def index 
        animals = Animal.all 
        render json: animals, status: :ok 
    end 

    def show 
        animal = Animal.find(params[:id])
        render json: animal, status: :ok 
    end
end
