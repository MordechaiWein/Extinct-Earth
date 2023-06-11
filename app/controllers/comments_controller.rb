class CommentsController < ApplicationController
    
    # def create
    #    user = User.find(session[:user_id])
    #    comment = user.comments.create!(comment_params)
    #    render json: comment, status: :created
    # end

    # def update
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #         comment = user.comments.find(params[:id])
    #         comment.update!(comment_params)
    #         render json: comment
    #     else
    #         comment = Comment.find(params[:id])
    #         comment.update!(like_params)
    #         render json: comment
    #     end
    # end

    # def destroy
    #     user = User.find(session[:user_id]) 
    #     comment = user.comments.find(params[:id])
    #     comment.destroy
    #     render json: comment
    # end

    # private

    # def comment_params
    #     params.permit(:animal_id, :text, :likes)
    # end

    # def like_params
    #     params.permit(:likes)
    # end

end

