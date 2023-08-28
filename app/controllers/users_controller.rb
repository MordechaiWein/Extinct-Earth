class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :cookie, :show]
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # def show
    #     user = User.find(session[:user_id])
    #     render json: user, status: :created
    # end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            if cookies[:reminder]
                render json: {error: "Not authorized, cookie exists" }, status: :unauthorized
            else
                render json: {error: "Not authorized" }, status: :unauthorized
            end
        end
    end

    def cookie
        cookies[:reminder] = 'reminder'
        render json: {cookie_value: cookies[:reminder]}
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email_address)
    end
    
end
