class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :start_date, :end_date, :cause, :created_at
end



