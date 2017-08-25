class Api::ExercisesController < ApplicationController
  def create
    @exercise = Exercise.new(exercise_params)

    if @exercise.save
      render 'api/users/user'
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def index
    @Exercises = Exercise.all
  end
  
  private

  def exercise_params
    params.require(:exercise).permit(:exercise_name)
  end
end
