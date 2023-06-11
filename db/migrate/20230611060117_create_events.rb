class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :image
      t.text :description
      t.string :start_date
      t.string :end_date
      t.string :cause

      t.timestamps
    end
  end
end
