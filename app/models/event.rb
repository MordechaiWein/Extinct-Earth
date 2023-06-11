class Event < ApplicationRecord

    validates :name, :image, :description, :start_date, :end_date, :cause, presence: true
    validates :description, length: {minimum: 400}
end
