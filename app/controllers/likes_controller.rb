class LikesController < ApplicationController

    def create
        user = User.find(session[:user_id])
        like = user.likes.create!(like_params)
        render json: like, status: :created
    end

    def destroy
        user = User.find(session[:user_id]) 
        like = user.likes.find_by(comment_id: params[:id])
        like.destroy
        render json: like
    end

    private 

    def like_params
        params.permit(:comment_id, :user_id)
    end

end
