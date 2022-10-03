class DiversController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create, :showDiverLogs, :showDiverID]

    def index 
        render json: Diver.all 
    end 

    def show_current 
        render json: @current_diver
    end 

    def show
        diver = Diver.find(params[:id])
        render json: diver, status: :ok
    end

    def showDiverLogs
        diver_logs = Diver.find(params[:id])
        render json: diver_logs.dive_logs, status: :ok
    end

    def create 
        diver = Diver.create!(diver_params)
        session[:diver_id] = diver.id 
        render json: diver, status: :created 
    end 

    private 

    def diver_params 
        params.permit(:name, :username, :country_from, :diver_cert_level, :age, :disclaimer, :email, :password, :avatar)
    end
end
