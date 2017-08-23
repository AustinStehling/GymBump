Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :workouts
    resources :exercises
    resources :setresults
  end
end
