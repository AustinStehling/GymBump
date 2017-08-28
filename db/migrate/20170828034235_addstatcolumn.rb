class Addstatcolumn < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :experience, :string
    add_column :users, :weight, :integer
    add_column :users, :height_in, :integer
    add_column :users, :height_ft, :integer
    remove_column :users, :image_url
  end
end
