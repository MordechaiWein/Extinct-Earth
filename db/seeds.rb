
puts '🦖 Meteorite destroying all users comments and likes...'

User.destroy_all
Comment.destroy_all
Like.destroy_all
User.create(username: 'Mordechai', password: 'ujiomurakami', password_confirmation: 'ujiomurakami', email_address: 'mordwein77@gmail.com', admin: true)

puts '✅ Done seeding!'






