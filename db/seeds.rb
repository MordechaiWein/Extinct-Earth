
puts '🦖 Seeding deployed database...'

User.destroy_all
Comment.destroy_all
User.create(username: 'Mordechai', password: 'bella', password_confirmation: 'bella', email_address: 'mordwein77@gmail.com', admin: true)

puts '✅ Done seeding!'






