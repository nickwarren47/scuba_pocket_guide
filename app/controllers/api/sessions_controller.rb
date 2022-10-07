class Api::SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create 
        diver = Diver.find_by(username: params[:username])
        if diver&.authenticate(params[:password])
            session[:diver_id] = diver.id 
            render json: diver, status: :created 
        else 
            render json: { error: "Invalid username or password" }, status: :unauthorized 
        end 
    end 

    def destroy 
        session.delete :diver_id 
        head :no_content 
    end 
end
