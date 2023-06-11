class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :animal

    validates :text, presence: true
end
