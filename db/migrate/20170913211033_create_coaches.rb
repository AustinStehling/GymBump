class CreateCoaches < ActiveRecord::Migration[5.1]
  def change
    create_table :coaches do |t|

      t.timestamps
    end
  end
end
