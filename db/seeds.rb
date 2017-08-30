# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Exercise.destroy_all
Workout.destroy_all
Setresult.destroy_all

user1 = User.create!(username: 'Austin', email: 'austin@gmail.com', first_name: 'Austin',
  last_name: 'Stehling', gender: 'Male', password: 'password', experience: 'Veteran', weight: 215,
  height_ft: 6, height_in: 2, birthday: '1990/07/28')

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

user9 = User.create!(username: 'Demo', email: 'demo@gmail.com', first_name: 'John',
  last_name: 'Doe', gender: 'Male', password: 'password', experience: 'Veteran', weight: 215,
  height_ft: 6, height_in: 2, birthday: '1990/07/28')

workout1 = Workout.create!(name: 'Crossfits Annie', user_id: user9.id)
workout2 = Workout.create!(name: 'Crossfits Angie', user_id: user9.id)
workout3 = Workout.create!(name: 'Crossfits Barbara', user_id: user9.id)
workout4 = Workout.create!(name: 'Crossfits Chelsea', user_id: user9.id)
workout5 = Workout.create!(name: 'Crossfits Cindy', user_id: user9.id)
workout6 = Workout.create!(name: 'Crossfits Diane', user_id: user9.id)
workout7 = Workout.create!(name: 'Crossfits Elizabeth', user_id: user9.id)
workout8 = Workout.create!(name: 'Crossfits Fran', user_id: user9.id)
workout9 = Workout.create!(name: 'Crossfits Frelen', user_id: user9.id)
workout10 = Workout.create!(name: 'Crossfits Grace', user_id: user9.id)
workout11 = Workout.create!(name: 'Crossfits Helen', user_id: user9.id)
workout12 = Workout.create!(name: 'Crossfits Isabel', user_id: user9.id)
workout13 = Workout.create!(name: 'Crossfits Jackie', user_id: user9.id)
workout14 = Workout.create!(name: 'Crossfits Karen', user_id: user9.id)
workout15 = Workout.create!(name: 'Crossfits Kelly', user_id: user9.id)
workout16 = Workout.create!(name: 'Crossfits Linda', user_id: user9.id)
workout17 = Workout.create!(name: 'Crossfits Lynne', user_id: user9.id)
workout18 = Workout.create!(name: 'Crossfits Mary', user_id: user9.id)
workout19 = Workout.create!(name: 'Crossfits Nancy', user_id: user9.id)
workout20 = Workout.create!(name: 'Crossfits Nicole', user_id: user9.id)
workout21 = Workout.create!(name: 'Crossfits Murph', user_id: user9.id)
workout22 = Workout.create!(name: 'Crossfits Badger', user_id: user9.id)
workout23 = Workout.create!(name: 'Crossfits Joshie', user_id: user9.id)
workout24 = Workout.create!(name: 'Crossfits Nate', user_id: user9.id)

exercise1 = Exercise.create!(exercise_name: "Squat", ex_type: 'lift')
exercise2 = Exercise.create!(exercise_name: "Lunge", ex_type: 'lift')
exercise3 = Exercise.create!(exercise_name: "Split Squat", ex_type: 'lift')
exercise4 = Exercise.create!(exercise_name: "Deadlift", ex_type: 'lift')
exercise5 = Exercise.create!(exercise_name: "Good Morning", ex_type: 'lift')
exercise6 = Exercise.create!(exercise_name: "Kettlebell Swing", ex_type: 'lift')
exercise7 = Exercise.create!(exercise_name: "Leg Press", ex_type: 'lift')
exercise8 = Exercise.create!(exercise_name: "Leg Extension", ex_type: 'lift')
exercise9 = Exercise.create!(exercise_name: "Leg Curl", ex_type: 'lift')
exercise10 = Exercise.create!(exercise_name: "Push-up", ex_type: 'lift')
exercise11 = Exercise.create!(exercise_name: "Bench Press", ex_type: 'lift')
exercise12 = Exercise.create!(exercise_name: "Incline Press", ex_type: 'lift')
exercise13 = Exercise.create!(exercise_name: "Decline Press", ex_type: 'lift')
exercise15 = Exercise.create!(exercise_name: "Pec Deck", ex_type: 'lift')
exercise16 = Exercise.create!(exercise_name: "Chest Fly", ex_type: 'lift')
exercise17 = Exercise.create!(exercise_name: "Pull-up", ex_type: 'lift')
exercise18 = Exercise.create!(exercise_name: "Banded Pull-up", ex_type: 'lift')
exercise19 = Exercise.create!(exercise_name: "Rower(Cardio)", ex_type: 'cardio')
exercise20 = Exercise.create!(exercise_name: "Overhead Press", ex_type: 'lift')
exercise21 = Exercise.create!(exercise_name: "Upright Rows", ex_type: 'lift')
exercise22 = Exercise.create!(exercise_name: "Lateral Raise", ex_type: 'lift')
exercise23 = Exercise.create!(exercise_name: "Curl", ex_type: 'lift')
exercise24 = Exercise.create!(exercise_name: "Skull Crusher", ex_type: 'lift')
exercise25 = Exercise.create!(exercise_name: "Tricep Extension", ex_type: 'lift')
exercise26 = Exercise.create!(exercise_name: "Machine Shrugs", ex_type: 'lift')
exercise27 = Exercise.create!(exercise_name: "Shrugs", ex_type: 'lift')
exercise28 = Exercise.create!(exercise_name: "Calf Raise", ex_type: 'lift')
exercise29 = Exercise.create!(exercise_name: "Plank", ex_type: 'bodyweight')
exercise30 = Exercise.create!(exercise_name: "Superman", ex_type: 'bodyweight')
exercise31 = Exercise.create!(exercise_name: "Trunk Rotation", ex_type: 'bodyweight')
exercise32 = Exercise.create!(exercise_name: "V-Up", ex_type: 'bodyweight')
exercise33 = Exercise.create!(exercise_name: "Situp", ex_type: 'bodyweight')
exercise34 = Exercise.create!(exercise_name: "Abdominal Crunch", ex_type: 'bodyweight')
exercise35 = Exercise.create!(exercise_name: "Bicycle", ex_type: 'cardio')
exercise36 = Exercise.create!(exercise_name: "Snatch", ex_type: 'lift')
exercise37 = Exercise.create!(exercise_name: "Clean", ex_type: 'lift')
exercise38 = Exercise.create!(exercise_name: "Clean and Jerk", ex_type: 'lift')
exercise39 = Exercise.create!(exercise_name: "Hang Clean", ex_type: 'lift')
exercise40 = Exercise.create!(exercise_name: "Hang Snatch", ex_type: 'lift')
exercise41 = Exercise.create!(exercise_name: "Burpees", ex_type: 'plyo')
exercise42 = Exercise.create!(exercise_name: "Mountain Climbers", ex_type: 'plyo')
exercise43 = Exercise.create!(exercise_name: "Wallballs", ex_type: 'lift')
exercise44 = Exercise.create!(exercise_name: "Thrusters", ex_type: 'lift')
exercise45 = Exercise.create!(exercise_name: "Jumping Jacks", ex_type: 'plyo')
exercise46 = Exercise.create!(exercise_name: "Box Jump", ex_type: 'plyo')
exercise47 = Exercise.create!(exercise_name: "Sprint", ex_type: 'cardio')
exercise48 = Exercise.create!(exercise_name: "Barbell Row", ex_type: 'lift')
exercise49 = Exercise.create!(exercise_name: "Bike", ex_type: 'cardio')
exercise50 = Exercise.create!(exercise_name: "Run", ex_type: 'cardio')
exercise51 = Exercise.create!(exercise_name: "Airdyne Bike", ex_type: 'cardio')
exercise53 = Exercise.create!(exercise_name: "Stationary Bike", ex_type: 'cardio')
exercise54 = Exercise.create!(exercise_name: "Stairmaster", ex_type: 'cardio')
exercise55 = Exercise.create!(exercise_name: "Treadmill", ex_type: 'cardio')
exercise56 = Exercise.create!(exercise_name: "Elliptical", ex_type: 'cardio')
