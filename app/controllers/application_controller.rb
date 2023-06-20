class ApplicationController < ActionController::API
  include ActionController::Cookies
  wrap_parameters format: []
  before_action :authorize
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  
  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def render_not_found
    render json: { error: ["Not authorized"] }, status: :unauthorized
  end

  def render_invalid(instance)
    render json: {errors: instance.record.errors.full_messages }, status: :unprocessable_entity
  end

end
