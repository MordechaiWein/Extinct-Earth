class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :likes, :animal_id, :user_id, :created_at

  belongs_to :user
  belongs_to :animal
  has_many :likes
  
end



