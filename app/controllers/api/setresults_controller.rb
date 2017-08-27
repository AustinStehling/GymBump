class Api::SetresultsController < ApplicationController

  def create

    @setresult = Setresult.new(setresult_params)

    if @setresult.save
      render :show
    else
      render json: @setresult.errors.full_messages, status: 422
    end

  end

  private

  def setresult_params
    params.require(:setresult).permit(:weight_lifted, :weight_unit, :reps,
      :distance, :distance_unit, :duration, :exercise_id, :workout_id)
  end
end
