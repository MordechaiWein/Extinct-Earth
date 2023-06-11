class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email_address)
    end
    
end