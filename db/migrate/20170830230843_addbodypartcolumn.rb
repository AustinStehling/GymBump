class Addbodypartcolumn < ActiveRecord::Migration[5.1]
  def change
    add_column :exercises, :bodypart, :string
  end
end
