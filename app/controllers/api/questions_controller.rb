class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all.includes(:answers)
  end

  def new
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
  end

  def edit
  end

  def update
    @question = Question.find(params[:id])
    if @question.update_attributes(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    if @question.destroy
      render :destroy
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def question_params
    params.require(:question).permit(:body, :question_author_id)
  end
end
