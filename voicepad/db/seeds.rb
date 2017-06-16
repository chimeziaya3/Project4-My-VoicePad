# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

noteData = [
    {
        title: 'math', 
        content: 'why do i even bother with you?', 
        folder_id: 1
    },

    {
        title: 'food',
        content: 'i love food',
        folder_id: 2
    }

]
folderData = [{foldername: 'lectures'}, {foldername: 'chim food'}]

noteData.each do |note_data|
  Note.create(note_data)
end

folderData.each do |folder_data|
  Folder.create(folder_data)
end
