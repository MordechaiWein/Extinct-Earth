class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin, :email_address, :animals

  def animals
    self.object.animals.uniq
  end
  
  has_many :comments
end

