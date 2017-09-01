class Changecolumntypesetresults < ActiveRecord::Migration[5.1]
  def change
    change_column :setresults, :sec, :string
    change_column :setresults, :hour, :string
    change_column :setresults, :min, :string
  end
end
