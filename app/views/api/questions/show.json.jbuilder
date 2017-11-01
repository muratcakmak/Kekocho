
json.extract! @question, :id, :body
json.authorName @question.question_author.first_name + " " + @question.question_author.last_name
json.answerIds @question.answers.pluck(:id)

json.answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.extract! answer, :id, :body
      json.answerAuthorId answer.answer_author_id
      json.questionId answer.question_id
      json.authorName (answer.answer_author.first_name + " " + answer.answer_author.last_name)
      json.commentIds answer.comments.pluck(:id)
    end
  end
end

comments = []
@question.answers.each do |answer|
  answer.comments.each do |comment|
    comments.push(comment)
  end
end

if comments.empty?
  json.comments({})
else
  json.comments do
    comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body
        json.commentAuthorId comment.comment_author_id
        json.answerId comment.answer_id
      end
    end
  end
end
