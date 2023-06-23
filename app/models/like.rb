class Like < ApplicationRecord
    belongs_to :user
    belongs_to :comment

    validates :comment_id, :user_id, presence: true
end
