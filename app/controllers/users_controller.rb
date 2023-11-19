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

    def people
        users = User.all
        render json: users
    end

    def show
        if request.headers['HTTP_ACCEPT'] == 'application/json'
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
        else
            redirect_to 'https://extinct-earth.onrender.com/'
        end
    end

    def cookie
        if request.headers['HTTP_ACCEPT'] == 'application/json'
            cookies[:reminder] = {
                value: 'reminder',
                expires: 1.day.from_now,
                path: '/'
            }
            render json: {cookie_value: cookies[:reminder]}
        else
            redirect_to 'https://extinct-earth.onrender.com/'
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email_address)
    end
    
end
