class Question < ApplicationRecord
  include PgSearch
  multisearchable :against => [:body]
  belongs_to :question_author,
   foreign_key: :question_author_id,
   class_name: :User

  validates :body, presence:true

  has_many :answers, dependent: :destroy

  has_many :question_topics, dependent: :destroy, inverse_of: :question

  has_many :topics,
    through: :question_topics,
    source: :topic
end
