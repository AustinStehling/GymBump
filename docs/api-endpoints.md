API Endpoints
-

HTML
-

  1. `GET / — loads React Web App`

Users
-

  1. `POST api/users`
  2. `PATCH api/users`

Session
-

  1. `POST api/session`
  2. `DELETE api/session`


Workouts
-

  1. `GET api/workouts`
    * fetches current users workouts.

  2. `POST api/workouts`
    * create new workout.

  3. `PATCH api/workout/id`
    * update existing workout.

  4. `DELETE api/workout/id`
    * delete existing workout.

Workout/Exercise/Results
-

  1. `POST api/workout_id/exercises`
    * create new exercise.

  2. `PATCH api/workout_id/exercise/id`
    * update an exercise.

  3. `DELETE api/workout_id/exercise/id`
    * delete an exercise.

Workout/Exercise/Results
-

  1. `GET api/workout_id/exercises/results`
    * fetches current users workout results.

  2. `POST api/workout_id/exercise_id/results`
    * log a result.

  3. `PATCH api/workout_id/exercise_id/result/id`
    * update a result.

  4. `DELETE api/workout_id/exercise_id/result/id`
    * delete a result.
