@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.workouts do
      user.workouts.each do |workout|
        json.set! workout.id do
          json.partial! 'api/workouts/workout', workout: workout
        end
      end
    end
  end
end
