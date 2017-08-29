class Addfloat < ActiveRecord::Migration[5.1]
  def change
    change_column :setresults, :distance, :float 
  end
end
