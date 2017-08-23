class CreateSetresults < ActiveRecord::Migration[5.1]
  def change
    create_table :setresults do |t|
      t.integer :weight_lifted
      t.string :weight_unit
      t.integer :reps
      t.integer :distance
      t.string :distance_unit
      t.time :duration
      t.integer :exercise_id, null: false
      t.timestamps
    end
  end
end
