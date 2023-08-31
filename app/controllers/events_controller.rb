class EventsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
    def index
        if request.headers['HTTP_ACCEPT'] == 'application/json'
            render json: Event.all
        else
            redirect_to 'https://extinct-earth.onrender.com/'
        end
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def update
        event = Event.find(params[:id])
        event.update!(event_params)
        render json: event
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        render json: event
    end

    private

    def event_params
        params.permit(:name, :image, :description, :start_date, :end_date, :cause)
    end
    
end
