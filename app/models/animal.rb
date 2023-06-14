class Animal < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments

    validates :name, :image, :classification, :history, :time_period, :scientific_name, :diet, :longitude, :latitude, :fun_fact, :link, presence: true
    validates :history, length: {minimum: 1200}
    validates :history, length: {maximum: 1275}
    validates :fun_fact, length: {maximum: 150}
    validates :classification, inclusion: { in: ["fish", "bird", "reptile", "mammal", "insect", "amphibian"] }
    # validates :longitude, :latitude, numericality: true
end



