puts '🦖🦕💥 Meteorite destroying selected comments...'

user = User.find_by(username: 'Tooky')
comment = user.comments.find_by(text: 'Weird pictures')
comment.destroy

puts '✅ Done seeding!'





