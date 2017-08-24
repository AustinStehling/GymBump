json.extract! user, :id, :username, :first_name, :last_name, :gender

json.workouts do
  json.array! user.workouts, partial: '/api/workouts/workout', as: :workout
end
