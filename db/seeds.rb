# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Setresult.destroy_all
Workout.destroy_all

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

workout1 = Workout.create!(name: 'Annie', user_id: user1.id)
workout2 = Workout.create!(name: 'Angie', user_id: user1.id)
workout3 = Workout.create!(name: 'Barbara', user_id: user1.id)
workout4 = Workout.create!(name: 'Chelsea', user_id: user1.id)
workout5 = Workout.create!(name: 'Cindy', user_id: user1.id)
workout6 = Workout.create!(name: 'Diane', user_id: user1.id)
workout7 = Workout.create!(name: 'Elizabeth', user_id: user1.id)
workout8 = Workout.create!(name: 'Fran', user_id: user1.id)
workout9 = Workout.create!(name: 'Frelen', user_id: user1.id)
workout10 = Workout.create!(name: 'Grace', user_id: user1.id)
workout11 = Workout.create!(name: 'Helen', user_id: user1.id)
workout12 = Workout.create!(name: 'Isabel', user_id: user1.id)
workout13 = Workout.create!(name: 'Jackie', user_id: user1.id)
workout14 = Workout.create!(name: 'Karen', user_id: user1.id)
workout15 = Workout.create!(name: 'Kelly', user_id: user1.id)
workout16 = Workout.create!(name: 'Linda', user_id: user1.id)
workout17 = Workout.create!(name: 'Lynne', user_id: user1.id)
workout18 = Workout.create!(name: 'Mary', user_id: user1.id)
workout19 = Workout.create!(name: 'Nancy', user_id: user1.id)
workout20 = Workout.create!(name: 'Nicole', user_id: user1.id)
workout21 = Workout.create!(name: 'Murph', user_id: user1.id)
workout22 = Workout.create!(name: 'Badger', user_id: user1.id)
workout23 = Workout.create!(name: 'Joshie', user_id: user1.id)
workout24 = Workout.create!(name: 'Nate', user_id: user1.id)
