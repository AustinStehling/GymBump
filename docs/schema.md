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
workout_id       | integer   | not null
updated_at       | datetime  | not null

## results

column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
exercise_id      | integer   | not null
sets             | integer   | not null, default 0
reps             | integer   | array, default [], if multiple sets, array will be split
duration         | integer   | array, default [], if array is length 3, idx 0 = hours, idx 1 = mins, idx 2 = seconds
updated_at       | datetime  | not null
