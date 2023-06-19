# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'destroying everything'
User.destroy_all
Event.destroy_all
Animal.destroy_all
Comment.destroy_all
User.create(username: 'Mordechai', password: 'this', password_confirmation: 'bee', email_address: 'mordwein77@gmail.com', admin: true)
puts 'everything destroyed'






