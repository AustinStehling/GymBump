class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :gender, null: false
      t.date :birthday
      t.index :username, unique: true
      t.timestamps null: false
      t.timestamps
    end
  end
end
