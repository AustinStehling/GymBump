class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def show
    @user = User.includes(:workouts).find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def update
    @user = User.find(params[:id])
    
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :gender, :first_name, :last_name,
      :birthday, :experience, :height_ft, :height_in, :weight)
  end
end
