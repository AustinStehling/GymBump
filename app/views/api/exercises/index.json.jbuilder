@Exercises.each do |exercise|
  json.set! exercise.id do
    json.extract! exercise, :id, :exercise_name, :ex_type, :bodypart
  end
end
