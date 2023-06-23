class CommentsController < ApplicationController

    def create
       user = User.find(session[:user_id])
       comment = user.comments.create!(comment_params)
       render json: comment, status: :created
    end

    def update
        user = User.find(session[:user_id])
        comment = user.comments.find(params[:id])
        comment.update!(comment_params)
        render json: comment
    end

    def destroy
        user = User.find(session[:user_id]) 
        comment = user.comments.find(params[:id])
        comment.destroy
        render json: comment
    end

    private

    def comment_params
        params.permit(:animal_id, :text)
    end

end

