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

user2 = User.create!(username: 'Brandon', email: 'brandon@gmail.com', first_name: 'Brandon',
  last_name: 'Stehling', gender: 'Male', password: 'password')

user3 = User.create!(username: 'Kayla', email: 'kayla@gmail.com', first_name: 'Kayla',
  last_name: 'Stehling', gender: 'Female', password: 'password')

user4 = User.create!(username: 'Patricia', email: 'pat@gmail.com', first_name: 'Pat',
  last_name: 'Stehling', gender: 'Female', password: 'password')

user5 = User.create!(username: 'Keith', email: 'keith@gmail.com', first_name: 'Keith',
  last_name: 'Stehling', gender: 'Male', password: 'password')

user6 = User.create!(username: 'Remington', email: 'remington@gmail.com', first_name: 'Remington',
  last_name: 'Stehling', gender: 'Male', password: 'password')

user7 = User.create!(username: 'Chris', email: 'chris@gmail.com', first_name: 'Chris',
  last_name: 'Petillo', gender: 'Male', password: 'password')

user8 = User.create!(username: 'Ramon', email: 'ramon@gmail.com', first_name: 'Ramon',
  last_name: 'Frazier', gender: 'Male', password: 'password')

user9 = User.create!(username: 'Demo', email: 'demo@gmail.com', first_name: 'De',
  last_name: 'Mo', gender: 'Male', password: 'password', experience: 'Veteran', weight: 215,
  height_ft: 6, height_in: 2, birthday: '1990/07/28')

workout1 = Workout.create!(name: 'Workout 1', user_id: user9.id)
workout2 = Workout.create!(name: 'Workout 2', user_id: user9.id)
workout3 = Workout.create!(name: 'Workout 3', user_id: user9.id)
workout4 = Workout.create!(name: 'Workout 4', user_id: user9.id)
workout5 = Workout.create!(name: 'Workout 5', user_id: user9.id)
workout6 = Workout.create!(name: 'Workout 6', user_id: user9.id)
workout7 = Workout.create!(name: 'Workout 7', user_id: user9.id)
workout8 = Workout.create!(name: 'Workout 8', user_id: user9.id)


exercise1 = Exercise.create!(exercise_name: "Squat", ex_type: 'lift', bodypart: 'Lower Body')
exercise2 = Exercise.create!(exercise_name: "Lunge", ex_type: 'lift', bodypart: 'Lower Body')
exercise3 = Exercise.create!(exercise_name: "Split Squat", ex_type: 'lift', bodypart: 'Lower Body')
exercise4 = Exercise.create!(exercise_name: "Deadlift", ex_type: 'lift', bodypart: 'Lower Body')
exercise5 = Exercise.create!(exercise_name: "Good Morning", ex_type: 'lift', bodypart: 'Lower Body')
exercise6 = Exercise.create!(exercise_name: "Kettlebell Swing", ex_type: 'lift', bodypart: 'Lower Body')
exercise7 = Exercise.create!(exercise_name: "Leg Press", ex_type: 'lift', bodypart: 'Lower Body')
exercise8 = Exercise.create!(exercise_name: "Leg Extension", ex_type: 'lift', bodypart: 'Lower Body')
exercise9 = Exercise.create!(exercise_name: "Leg Curl", ex_type: 'lift', bodypart: 'Lower Body')
exercise10 = Exercise.create!(exercise_name: "Push-up", ex_type: 'bodyweight', bodypart: 'Upper Body')
exercise11 = Exercise.create!(exercise_name: "Bench Press", ex_type: 'lift', bodypart: 'Upper Body')
exercise12 = Exercise.create!(exercise_name: "Incline Press", ex_type: 'lift', bodypart: 'Upper Body')
exercise13 = Exercise.create!(exercise_name: "Decline Press", ex_type: 'lift', bodypart: 'Upper Body')
exercise15 = Exercise.create!(exercise_name: "Pec Deck", ex_type: 'lift', bodypart: 'Upper Body')
exercise16 = Exercise.create!(exercise_name: "Chest Fly", ex_type: 'lift', bodypart: 'Upper Body')
exercise17 = Exercise.create!(exercise_name: "Pull-up", ex_type: 'bodyweight', bodypart: 'Upper Body')
exercise18 = Exercise.create!(exercise_name: "Banded Pull-up", ex_type: 'lift', bodypart: 'Upper Body')
exercise19 = Exercise.create!(exercise_name: "Rower(Cardio)", ex_type: 'cardio', bodypart: 'Cardio')
exercise20 = Exercise.create!(exercise_name: "Overhead Press", ex_type: 'lift', bodypart: 'Upper Body')
exercise21 = Exercise.create!(exercise_name: "Upright Rows", ex_type: 'lift', bodypart: 'Upper Body')
exercise22 = Exercise.create!(exercise_name: "Lateral Raise", ex_type: 'lift', bodypart: 'Upper Body')
exercise23 = Exercise.create!(exercise_name: "Curl", ex_type: 'lift', bodypart: 'Upper Body')
exercise24 = Exercise.create!(exercise_name: "Skull Crusher", ex_type: 'lift', bodypart: 'Upper Body')
exercise25 = Exercise.create!(exercise_name: "Tricep Extension", ex_type: 'lift', bodypart: 'Upper Body')
exercise26 = Exercise.create!(exercise_name: "Machine Shrugs", ex_type: 'lift', bodypart: 'Upper Body')
exercise27 = Exercise.create!(exercise_name: "Shrugs", ex_type: 'lift', bodypart: 'Upper Body')
exercise28 = Exercise.create!(exercise_name: "Calf Raise", ex_type: 'lift', bodypart: 'Lower Body')
exercise29 = Exercise.create!(exercise_name: "Plank", ex_type: 'bodyweight', bodypart: 'Core')
exercise30 = Exercise.create!(exercise_name: "Superman", ex_type: 'bodyweight', bodypart: 'Core')
exercise31 = Exercise.create!(exercise_name: "Trunk Rotation", ex_type: 'bodyweight', bodypart: 'Core')
exercise32 = Exercise.create!(exercise_name: "V-Up", ex_type: 'bodyweight', bodypart: 'Core')
exercise33 = Exercise.create!(exercise_name: "Situp", ex_type: 'bodyweight', bodypart: 'Core')
exercise34 = Exercise.create!(exercise_name: "Abdominal Crunch", ex_type: 'bodyweight', bodypart: 'Core')
exercise35 = Exercise.create!(exercise_name: "Bicycle", ex_type: 'cardio', bodypart: 'Cardio')
exercise36 = Exercise.create!(exercise_name: "Snatch", ex_type: 'lift', bodypart: 'Full Body')
exercise37 = Exercise.create!(exercise_name: "Clean", ex_type: 'lift', bodypart: 'Full Body')
exercise38 = Exercise.create!(exercise_name: "Clean and Jerk", ex_type: 'lift', bodypart: 'Full Body')
exercise39 = Exercise.create!(exercise_name: "Hang Clean", ex_type: 'lift', bodypart: 'Full Body')
exercise40 = Exercise.create!(exercise_name: "Hang Snatch", ex_type: 'lift', bodypart: 'Full Body')
exercise41 = Exercise.create!(exercise_name: "Burpees", ex_type: 'plyo', bodypart: 'Plyo')
exercise42 = Exercise.create!(exercise_name: "Mountain Climbers", ex_type: 'plyo', bodypart: 'Plyo')
exercise43 = Exercise.create!(exercise_name: "Wallballs", ex_type: 'lift', bodypart: 'Full Body')
exercise44 = Exercise.create!(exercise_name: "Thrusters", ex_type: 'lift', bodypart: 'Full Body')
exercise45 = Exercise.create!(exercise_name: "Jumping Jacks", ex_type: 'plyo', bodypart: 'Plyo')
exercise46 = Exercise.create!(exercise_name: "Box Jump", ex_type: 'plyo', bodypart: 'Plyo')
exercise47 = Exercise.create!(exercise_name: "Sprint", ex_type: 'cardio', bodypart: 'Cardio')
exercise48 = Exercise.create!(exercise_name: "Barbell Row", ex_type: 'lift', bodypart: 'Upper Body')
exercise49 = Exercise.create!(exercise_name: "Bike", ex_type: 'cardio', bodypart: 'Cardio')
exercise50 = Exercise.create!(exercise_name: "Run", ex_type: 'cardio', bodypart: 'Cardio')
exercise51 = Exercise.create!(exercise_name: "Airdyne Bike", ex_type: 'cardio', bodypart: 'Cardio')
exercise53 = Exercise.create!(exercise_name: "Stationary Bike", ex_type: 'cardio', bodypart: 'Cardio')
exercise54 = Exercise.create!(exercise_name: "Stairmaster", ex_type: 'cardio', bodypart: 'Cardio')
exercise55 = Exercise.create!(exercise_name: "Treadmill", ex_type: 'cardio', bodypart: 'Cardio')
exercise56 = Exercise.create!(exercise_name: "Elliptical", ex_type: 'cardio', bodypart: 'Cardio')
exercise57 = Exercise.create!(exercise_name: "Muscle Up", ex_type: 'lift', bodypart: 'Upper Body')

workout9 = Workout.create!(name: 'Workout 1', user_id: user1.id)
workout10 = Workout.create!(name: 'Workout 1', user_id: user2.id)
workout11 = Workout.create!(name: 'Workout 1', user_id: user3.id)
workout12 = Workout.create!(name: 'Workout 1', user_id: user4.id)
workout13 = Workout.create!(name: 'Workout 1', user_id: user5.id)
workout14 = Workout.create!(name: 'Workout 1', user_id: user6.id)
workout15 = Workout.create!(name: 'Workout 1', user_id: user7.id)
workout16 = Workout.create!(name: 'Workout 1', user_id: user8.id)

Setresult.create!(workout_id: workout9.id, exercise_id: exercise11.id, weight_lifted: 455, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout10.id, exercise_id: exercise11.id, weight_lifted: 225, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout11.id, exercise_id: exercise45.id, reps: 45)
Setresult.create!(workout_id: workout12.id, exercise_id: exercise42.id, reps: 30)
Setresult.create!(workout_id: workout13.id, exercise_id: exercise11.id, weight_lifted: 415, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout14.id, exercise_id: exercise11.id, weight_lifted: 350, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout15.id, exercise_id: exercise11.id, weight_lifted: 415, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout16.id, exercise_id: exercise11.id, weight_lifted: 325, reps: 1, weight_unit: 'lbs')

Setresult.create!(workout_id: workout9.id, exercise_id: exercise1.id, weight_lifted: 545, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout10.id, exercise_id: exercise1.id, weight_lifted: 315, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout11.id, exercise_id: exercise33.id, reps: 50)
Setresult.create!(workout_id: workout12.id, exercise_id: exercise34.id, reps: 40)
Setresult.create!(workout_id: workout13.id, exercise_id: exercise1.id, weight_lifted: 500, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout14.id, exercise_id: exercise1.id, weight_lifted: 405, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout15.id, exercise_id: exercise1.id, weight_lifted: 225, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout16.id, exercise_id: exercise1.id, weight_lifted: 475, reps: 1, weight_unit: 'lbs')

Setresult.create!(workout_id: workout9.id, exercise_id: exercise4.id, weight_lifted: 635, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout10.id, exercise_id: exercise4.id, weight_lifted: 405, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout11.id, exercise_id: exercise2.id, weight_lifted: 30, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout12.id, exercise_id: exercise3.id, weight_lifted: 25, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout13.id, exercise_id: exercise4.id, weight_lifted: 600, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout14.id, exercise_id: exercise4.id, weight_lifted: 495, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout15.id, exercise_id: exercise4.id, weight_lifted: 315, reps: 1, weight_unit: 'lbs')
Setresult.create!(workout_id: workout16.id, exercise_id: exercise4.id, weight_lifted: 515, reps: 1, weight_unit: 'lbs')

Setresult.create!(workout_id: workout1.id, exercise_id: exercise11.id, weight_lifted: 215, reps: 12, weight_unit: 'lbs')
Setresult.create!(workout_id: workout1.id, exercise_id: exercise11.id, weight_lifted: 225, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout1.id, exercise_id: exercise11.id, weight_lifted: 235, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout1.id, exercise_id: exercise1.id, weight_lifted: 325, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout1.id, exercise_id: exercise1.id, weight_lifted: 335, reps: 6, weight_unit: 'lbs')
Setresult.create!(workout_id: workout1.id, exercise_id: exercise1.id, weight_lifted: 345, reps: 4, weight_unit: 'lbs')
Setresult.create!(workout_id: workout1.id, exercise_id: exercise4.id, weight_lifted: 425, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout1.id, exercise_id: exercise4.id, weight_lifted: 435, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout1.id, exercise_id: exercise4.id, weight_lifted: 445, reps: 5, weight_unit: 'lbs')

Setresult.create!(workout_id: workout2.id, exercise_id: exercise11.id, weight_lifted: 225, reps: 12, weight_unit: 'lbs')
Setresult.create!(workout_id: workout2.id, exercise_id: exercise11.id, weight_lifted: 235, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout2.id, exercise_id: exercise11.id, weight_lifted: 245, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout2.id, exercise_id: exercise1.id, weight_lifted: 335, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout2.id, exercise_id: exercise1.id, weight_lifted: 345, reps: 6, weight_unit: 'lbs')
Setresult.create!(workout_id: workout2.id, exercise_id: exercise1.id, weight_lifted: 355, reps: 4, weight_unit: 'lbs')
Setresult.create!(workout_id: workout2.id, exercise_id: exercise4.id, weight_lifted: 435, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout2.id, exercise_id: exercise4.id, weight_lifted: 445, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout2.id, exercise_id: exercise4.id, weight_lifted: 455, reps: 5, weight_unit: 'lbs')

Setresult.create!(workout_id: workout3.id, exercise_id: exercise11.id, weight_lifted: 235, reps: 12, weight_unit: 'lbs')
Setresult.create!(workout_id: workout3.id, exercise_id: exercise11.id, weight_lifted: 245, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout3.id, exercise_id: exercise11.id, weight_lifted: 255, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout3.id, exercise_id: exercise1.id, weight_lifted: 345, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout3.id, exercise_id: exercise1.id, weight_lifted: 355, reps: 6, weight_unit: 'lbs')
Setresult.create!(workout_id: workout3.id, exercise_id: exercise1.id, weight_lifted: 365, reps: 4, weight_unit: 'lbs')
Setresult.create!(workout_id: workout3.id, exercise_id: exercise4.id, weight_lifted: 445, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout3.id, exercise_id: exercise4.id, weight_lifted: 455, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout3.id, exercise_id: exercise4.id, weight_lifted: 465, reps: 5, weight_unit: 'lbs')

Setresult.create!(workout_id: workout4.id, exercise_id: exercise11.id, weight_lifted: 245, reps: 12, weight_unit: 'lbs')
Setresult.create!(workout_id: workout4.id, exercise_id: exercise11.id, weight_lifted: 255, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout4.id, exercise_id: exercise11.id, weight_lifted: 265, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout4.id, exercise_id: exercise1.id, weight_lifted: 355, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout4.id, exercise_id: exercise1.id, weight_lifted: 365, reps: 6, weight_unit: 'lbs')
Setresult.create!(workout_id: workout4.id, exercise_id: exercise1.id, weight_lifted: 375, reps: 4, weight_unit: 'lbs')
Setresult.create!(workout_id: workout4.id, exercise_id: exercise4.id, weight_lifted: 455, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout4.id, exercise_id: exercise4.id, weight_lifted: 465, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout4.id, exercise_id: exercise4.id, weight_lifted: 475, reps: 5, weight_unit: 'lbs')

Setresult.create!(workout_id: workout5.id, exercise_id: exercise11.id, weight_lifted: 255, reps: 12, weight_unit: 'lbs')
Setresult.create!(workout_id: workout5.id, exercise_id: exercise11.id, weight_lifted: 265, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout5.id, exercise_id: exercise11.id, weight_lifted: 275, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout5.id, exercise_id: exercise1.id, weight_lifted: 365, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout5.id, exercise_id: exercise1.id, weight_lifted: 375, reps: 6, weight_unit: 'lbs')
Setresult.create!(workout_id: workout5.id, exercise_id: exercise1.id, weight_lifted: 385, reps: 4, weight_unit: 'lbs')
Setresult.create!(workout_id: workout5.id, exercise_id: exercise4.id, weight_lifted: 465, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout5.id, exercise_id: exercise4.id, weight_lifted: 475, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout5.id, exercise_id: exercise4.id, weight_lifted: 485, reps: 5, weight_unit: 'lbs')

Setresult.create!(workout_id: workout6.id, exercise_id: exercise11.id, weight_lifted: 265, reps: 12, weight_unit: 'lbs')
Setresult.create!(workout_id: workout6.id, exercise_id: exercise11.id, weight_lifted: 275, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout6.id, exercise_id: exercise11.id, weight_lifted: 285, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout6.id, exercise_id: exercise1.id, weight_lifted: 375, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout6.id, exercise_id: exercise1.id, weight_lifted: 385, reps: 6, weight_unit: 'lbs')
Setresult.create!(workout_id: workout6.id, exercise_id: exercise1.id, weight_lifted: 395, reps: 4, weight_unit: 'lbs')
Setresult.create!(workout_id: workout6.id, exercise_id: exercise4.id, weight_lifted: 475, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout6.id, exercise_id: exercise4.id, weight_lifted: 485, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout6.id, exercise_id: exercise4.id, weight_lifted: 495, reps: 5, weight_unit: 'lbs')

Setresult.create!(workout_id: workout7.id, exercise_id: exercise11.id, weight_lifted: 275, reps: 12, weight_unit: 'lbs')
Setresult.create!(workout_id: workout7.id, exercise_id: exercise11.id, weight_lifted: 285, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout7.id, exercise_id: exercise11.id, weight_lifted: 295, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout7.id, exercise_id: exercise1.id, weight_lifted: 385, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout7.id, exercise_id: exercise1.id, weight_lifted: 395, reps: 6, weight_unit: 'lbs')
Setresult.create!(workout_id: workout7.id, exercise_id: exercise1.id, weight_lifted: 405, reps: 4, weight_unit: 'lbs')
Setresult.create!(workout_id: workout7.id, exercise_id: exercise4.id, weight_lifted: 485, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout7.id, exercise_id: exercise4.id, weight_lifted: 495, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout7.id, exercise_id: exercise4.id, weight_lifted: 505, reps: 5, weight_unit: 'lbs')

Setresult.create!(workout_id: workout8.id, exercise_id: exercise11.id, weight_lifted: 285, reps: 12, weight_unit: 'lbs')
Setresult.create!(workout_id: workout8.id, exercise_id: exercise11.id, weight_lifted: 295, reps: 10, weight_unit: 'lbs')
Setresult.create!(workout_id: workout8.id, exercise_id: exercise11.id, weight_lifted: 305, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout8.id, exercise_id: exercise1.id, weight_lifted: 395, reps: 8, weight_unit: 'lbs')
Setresult.create!(workout_id: workout8.id, exercise_id: exercise1.id, weight_lifted: 405, reps: 6, weight_unit: 'lbs')
Setresult.create!(workout_id: workout8.id, exercise_id: exercise1.id, weight_lifted: 415, reps: 4, weight_unit: 'lbs')
Setresult.create!(workout_id: workout8.id, exercise_id: exercise4.id, weight_lifted: 495, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout8.id, exercise_id: exercise4.id, weight_lifted: 505, reps: 5, weight_unit: 'lbs')
Setresult.create!(workout_id: workout8.id, exercise_id: exercise4.id, weight_lifted: 515, reps: 5, weight_unit: 'lbs')
