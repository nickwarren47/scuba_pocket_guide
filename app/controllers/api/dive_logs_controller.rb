class Api::DiveLogsController < ApplicationController
    wrap_parameters format:[]
    skip_before_action :authorize, only: [:index]

    def index 
        dive_logs = DiveLog.all 
        render json: dive_logs, status: :ok
    end 

    def show 
        dive_log = dive_log_find 
        render json: dive_log 
    end 

    def create 
        if session[:diver_id] != nil 
            dive_log = DiveLog.create!(dive_log_params.merge(:diver_id => session[:diver_id]))
            render json: dive_log, status: 201
        else 
            render json: { error: "Not authorized" }, status: 401 
        end 
    end

    def update 
        dive_log = dive_log_find 
        dive_log.update!(dive_log_params)
        render json: dive_log 
    end 

    def destroy 
        dive_log = dive_log_find
        dive_log.destroy 
        head :no_content
    end

    private 

    def dive_log_find 
        DiveLog.find(params[:id])
    end 

    def dive_log_params 
        params.permit(:dive_number, :dive_site_name, :dive_site_country, :date, :time_in, :time_out, :depth_achieved, :starting_psi, :ending_psi, :air_temp, :surface_temp, :bottom_temp, :fresh_or_salt_water, :shore_or_boat, :training_dive, :diver_id, :diver_site_id)
    end
end
