
puts '🦖🦕💥 Meteorite destroying selected comments...'

User.find_by(username: 'moshe').comments.destroy_all
User.find_by(username: 'chashadinedine').comments.destroy_all

puts '✅ Done seeding!'






