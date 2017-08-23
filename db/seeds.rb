# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user1 = User.create!(username: 'biga1990', email: 'austin@gmail.com', first_name: 'Austin',
  last_name: 'Stehling', gender: 'Male', password: 'password')

user2 = User.create!(username: 'bdog19', email: 'brandon@gmail.com', first_name: 'Brandon',
  last_name: 'Stehling', gender: 'Male', password: 'password')

user3 = User.create!(username: 'word_search_lassy', email: 'kayla@gmail.com', first_name: 'Kayla',
  last_name: 'Stehling', gender: 'Female', password: 'password')

user4 = User.create!(username: 'pistol_pat', email: 'pat@gmail.com', first_name: 'Pat',
  last_name: 'Stehling', gender: 'Female', password: 'password')

user5 = User.create!(username: 'kfs59', email: 'keith@gmail.com', first_name: 'Keith',
  last_name: 'Stehling', gender: 'Male', password: 'password')

user6 = User.create!(username: 'burpeeMachine', email: 'remington@gmail.com', first_name: 'Remington',
  last_name: 'Stehling', gender: 'Male', password: 'password')

user7 = User.create!(username: 'cpLycoLax', email: 'chris@gmail.com', first_name: 'Chris',
  last_name: 'Petillo', gender: 'Male', password: 'password')

user8 = User.create!(username: 'brody_Ramon', email: 'ramon@gmail.com', first_name: 'Ramon',
  last_name: 'Frazier', gender: 'Male', password: 'password')

workout1 = Workout.create!(name: 'chest day', user_id: user1.id)
workout2 = Workout.create!(name: 'back day', user_id: user1.id)
workout3 = Workout.create!(name: 'leg day', user_id: user1.id)
workout4 = Workout.create!(name: 'shoulder day', user_id: user1.id)

exercise1 = Exercise.create!(exercise_name: 'bench press', workout_id: workout1.id)
exercise2 = Exercise.create!(exercise_name: 'incline press', workout_id: workout1.id)
exercise3 = Exercise.create!(exercise_name: 'pull-up', workout_id: workout2.id)
exercise4 = Exercise.create!(exercise_name: 'deadlift', workout_id: workout2.id)

setresult1 = Setresult.create!(weight_lifted: 365, reps: 5, exercise_id: exercise1.id)
setresult2 = Setresult.create!(weight_lifted: 275, reps: 8, exercise_id: exercise2.id)
setresult3 = Setresult.create!(reps: 20, exercise_id: exercise3.id)
setresult4 = Setresult.create!(weight_lifted: 585, reps: 5, exercise_id: exercise4.id)
setresult5 = Setresult.create!(weight_lifted: 315, reps: 8, exercise_id: exercise1.id)
