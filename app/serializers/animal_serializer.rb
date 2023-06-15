class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :classification, :history, :time_period, :scientific_name, :diet, :longitude, :latitude, :fun_fact, :link, :summary

  def summary 
    self.object.history[0..230]
  end

  has_many :comments
end
