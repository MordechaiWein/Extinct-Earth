
puts '🦖 Meteorite destroying all users comments and likes...'

User.destroy_all
Comment.destroy_all
Like.destroy_all
User.create(username: 'Mordechai', password: 'sensiblededuction', password_confirmation: 'sensiblededuction', email_address: 'mordwein77@gmail.com', admin: true)

puts '✅ Done seeding!'






