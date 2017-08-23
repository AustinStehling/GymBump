# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!(
  username: 'biga1990',
  email: 'austin@gmail.com',
  first_name: 'Austin',
  last_name: 'Stehling',
  gender: 'Male',
  password: 'password'
  )

User.create!(
  username: 'bdog19',
  email: 'brandon@gmail.com',
  first_name: 'Brandon',
  last_name: 'Stehling',
  gender: 'Male',
  password: 'password'
  )

User.create!(
  username: 'word_search_lassy',
  email: 'kayla@gmail.com',
  first_name: 'Kayla',
  last_name: 'Stehling',
  gender: 'Female',
  password: 'password'
  )

User.create!(
  username: 'pistol_pat',
  email: 'pat@gmail.com',
  first_name: 'Pat',
  last_name: 'Stehling',
  gender: 'Female',
  password: 'password'
  )

User.create!(
  username: 'kfs59',
  email: 'keith@gmail.com',
  first_name: 'Keith',
  last_name: 'Stehling',
  gender: 'Male',
  password: 'password'
  )

User.create!(
  username: 'burpeeMachine',
  email: 'remington@gmail.com',
  first_name: 'Remington',
  last_name: 'Stehling',
  gender: 'Male',
  password: 'password'
  )

User.create!(
  username: 'cpLycoLax',
  email: 'chris@gmail.com',
  first_name: 'Chris',
  last_name: 'Petillo',
  gender: 'Male',
  password: 'password'
  )

User.create!(
  username: 'brody_Ramon',
  email: 'ramon@gmail.com',
  first_name: 'Ramon',
  last_name: 'Frazier',
  gender: 'Male',
  password: 'password'
  )
