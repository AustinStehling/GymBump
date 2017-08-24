class Addsetcolumn < ActiveRecord::Migration[5.1]
  def change
    add_column :setresults, :workout_id, :integer, null: false 
  end
end
