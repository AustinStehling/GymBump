class Removeduration < ActiveRecord::Migration[5.1]
  def change
    remove_column :setresults, :duration
    add_column :setresults, :sec, :integer
    add_column :setresults, :min, :integer
    add_column :setresults, :hour, :integer
  end
end
