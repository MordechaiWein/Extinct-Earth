
puts '🦖 Seeding deployed database...'

User.destroy_all
Comment.destroy_all
Event.destroy_all
User.create(username: 'Mordechai', password: 'ujiosazuki', password_confirmation: 'BathildaBagshot', email_address: 'mordwein77@gmail.com', admin: true)

puts '✅ Done seeding!'






