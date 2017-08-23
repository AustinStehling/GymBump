class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.string :name, null: false
      t.integer :user_id, null: false 
      t.timestamps
    end
  end
end
