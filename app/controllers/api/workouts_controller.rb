class Api::WorkoutsController < ApplicationController

  def show
    @workout = Workout.find(params[:id])
    render :show
  end
end
