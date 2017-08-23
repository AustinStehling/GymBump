class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.integer :workout_id, null: false
      t.string :exercise_name, null: false 
      t.timestamps
    end
  end
end
