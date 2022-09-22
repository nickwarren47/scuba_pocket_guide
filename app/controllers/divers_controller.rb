class DiversController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]

    def index 
        render json: Diver.all 
    end 

    def show 
        render json: @current_diver
    end 

    def create 
        diver = Diver.create!(diver_params)
        session[:diver_id] = diver.id 
        render json: diver, status: :created 
    end 

    private 

    def diver_params 
        params.permit(:name, :country_from, :diver_cert_level, :age, :disclaimer, :email, :password_digest, :avatar)
    end
end
