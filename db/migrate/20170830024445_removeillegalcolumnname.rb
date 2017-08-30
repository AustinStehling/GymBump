class Removeillegalcolumnname < ActiveRecord::Migration[5.1]
  def change
    remove_column :exercises, :type
    add_column :exercises, :ex_type, :string 
  end
end
