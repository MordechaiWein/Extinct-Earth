class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :image
      t.string :classification
      t.text :history
      t.string :time_period
      t.string :scientific_name
      t.string :diet
      t.decimal :longitude
      t.decimal :latitude
      t.string :fun_fact
      t.string :link

      t.timestamps
    end
  end
end
