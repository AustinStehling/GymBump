class Api::WorkoutsController < ApplicationController

  def show
    @workout = Workout.find(params[:id])
    render :show
  end

  def create
    debugger
    @workout = Workout.new(workout_params)
    @workout.user = current_user
    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end

  end

  def destroy
    @workout = Workout.find(params[:id])
    @workout.destory

    render :show
  end

  def update
    @workout = Workout.find(params[:id])

    if @workout.update(workout_params)
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end

  end

  def index
     @workouts = Workout.all
     render :index
  end

  private

  def workout_params
    params.require(:workout).permit(:name)
  end

end
