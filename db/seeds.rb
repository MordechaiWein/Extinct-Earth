
puts '🦖🦕💥 Meteorite destroying selected data...'
puts "Destroying selected account..."

puts "🔴"
puts "🟡"
puts "🟢"
puts "🟣"

moshe_gerstel = User.find_by(username: 'Tooky')
moshe_gerstel.destroy

puts '✅ Done seeding!'





