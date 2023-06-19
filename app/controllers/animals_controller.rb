class AnimalsController < ApplicationController

    def index
        animals = Animal.all
        render json: animals, include: ['comments', 'comments.user']
    end

    def create
        animal = Animal.create!(animal_params)
        render json: animal, status: :created
    end

    def update
        animal = Animal.find(params[:id])
        animal.update!(animal_params)
        render json: animal, include: ['comments', 'comments.user']
    end

    def destroy
        animal = Animal.find(params[:id])
        animal.destroy
        render json: animal
    end

    private

    def animal_params
        params.permit(:name, :image, :classification, :history, :time_period, :scientific_name, :diet, :longitude, :latitude, :fun_fact, :link )
    end

end
