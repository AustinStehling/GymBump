json.extract! user, :id, :username, :gender, :birthday, :experience, :height_ft, :height_in,
  :first_name, :last_name, :weight

json.avatar_url asset_path(user.avatar.url)

json.workouts do
  user.workouts.each do |workout|
    json.set! workout.id do
      json.partial! 'api/workouts/workout', workout: workout
    end
  end
  # json.array! user.workouts, partial: '/api/workouts/workout', as: :workout
end
