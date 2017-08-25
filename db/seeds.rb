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

user9 = User.create!(username: 'Demo', email: 'demo@gmail.com', first_name: 'John',
  last_name: 'Doe', gender: 'Male', password: 'password')

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

exercise1 = Exercise.create!(exercise_name: "Squat")
exercise2 = Exercise.create!(exercise_name: "Lunge")
exercise3 = Exercise.create!(exercise_name: "Split Squat")
exercise4 = Exercise.create!(exercise_name: "Deadlift")
exercise5 = Exercise.create!(exercise_name: "Good Morning")
exercise6 = Exercise.create!(exercise_name: "Kettlebell Swing")
exercise7 = Exercise.create!(exercise_name: "Leg Press")
exercise8 = Exercise.create!(exercise_name: "Leg Extension")
exercise9 = Exercise.create!(exercise_name: "Leg Curl")
exercise10 = Exercise.create!(exercise_name: "Push-up")
exercise11 = Exercise.create!(exercise_name: "Bench Press")
exercise12 = Exercise.create!(exercise_name: "Incline Press")
exercise13 = Exercise.create!(exercise_name: "Decline Press")
exercise15 = Exercise.create!(exercise_name: "Pec Deck")
exercise16 = Exercise.create!(exercise_name: "Chest Fly")
exercise17 = Exercise.create!(exercise_name: "Pull-up")
exercise18 = Exercise.create!(exercise_name: "Banded Pull-up")
exercise19 = Exercise.create!(exercise_name: "Rower(Cardio)")
exercise20 = Exercise.create!(exercise_name: "Overhead Press")
exercise21 = Exercise.create!(exercise_name: "Upright Rows")
exercise22 = Exercise.create!(exercise_name: "Lateral Raise")
exercise23 = Exercise.create!(exercise_name: "Curl")
exercise24 = Exercise.create!(exercise_name: "Skull Crusher")
exercise25 = Exercise.create!(exercise_name: "Tricep Extension")
exercise26 = Exercise.create!(exercise_name: "Machine Shrugs")
exercise27 = Exercise.create!(exercise_name: "Shrugs")
exercise28 = Exercise.create!(exercise_name: "Calf Raise")
exercise29 = Exercise.create!(exercise_name: "Plank")
exercise30 = Exercise.create!(exercise_name: "Superman")
exercise31 = Exercise.create!(exercise_name: "Trunk Rotation")
exercise32 = Exercise.create!(exercise_name: "V-Up")
exercise33 = Exercise.create!(exercise_name: "Situp")
exercise34 = Exercise.create!(exercise_name: "Abdominal Crunch")
exercise35 = Exercise.create!(exercise_name: "Bicycle")
exercise36 = Exercise.create!(exercise_name: "Snatch")
exercise37 = Exercise.create!(exercise_name: "Clean")
exercise38 = Exercise.create!(exercise_name: "Clean and Jerk")
exercise39 = Exercise.create!(exercise_name: "Hang Clean")
exercise40 = Exercise.create!(exercise_name: "Hang Snatch")
exercise41 = Exercise.create!(exercise_name: "Burpees")
exercise42 = Exercise.create!(exercise_name: "Mountain Climbers")
exercise43 = Exercise.create!(exercise_name: "Wallballs")
exercise44 = Exercise.create!(exercise_name: "Thrusters")
exercise45 = Exercise.create!(exercise_name: "Jumping Jacks")
exercise46 = Exercise.create!(exercise_name: "Box Jump")
exercise47 = Exercise.create!(exercise_name: "Sprint")
exercise48 = Exercise.create!(exercise_name: "Row")
exercise49 = Exercise.create!(exercise_name: "Bike")
exercise50 = Exercise.create!(exercise_name: "Run")
exercise51 = Exercise.create!(exercise_name: "Airdyne Bike")
exercise52 = Exercise.create!(exercise_name: "Row")
exercise53 = Exercise.create!(exercise_name: "Stationary Bike")
exercise54 = Exercise.create!(exercise_name: "Stairmaster")
exercise55 = Exercise.create!(exercise_name: "Treadmill")
exercise56 = Exercise.create!(exercise_name: "Elliptical")
