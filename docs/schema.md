Database Schema
-

## users
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
username         | string    | not null
email            | string    | not null
password_digest  | string    | not null
session_token    | string    | not null
gender           | string    | not null
DOB              | date      | not null
image_url        | string    |
updated_at       | datetime  | not null

## workouts

column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
name             | string    | not null
user_id          | integer   | not null
updated_at       | datetime  | not null

## exercises

column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
name             | string    | not null
sets             | integer   | not null
workout_id       | integer   | not null
updated_at       | datetime  | not null

## sets

column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
exercise_id      | integer   | not null
reps             | integer   |
duration         | integer   | 
updated_at       | datetime  | not null
