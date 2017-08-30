class Addcolumntypeexercises < ActiveRecord::Migration[5.1]
  def change
    add_column :exercises, :type, :string
  end
end
