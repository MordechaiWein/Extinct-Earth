class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :animal_id
      t.string :text
      t.integer :likes

      t.timestamps
    end
  end
end
