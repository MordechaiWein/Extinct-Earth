class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :animal
    has_many :likes, dependent: :destroy

    validates :text, presence: true
end
