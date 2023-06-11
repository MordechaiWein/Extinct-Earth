class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :classification, :history, :time_period, :scientific_name, :diet, :longitude, :latitude, :fun_fact, :link
end
