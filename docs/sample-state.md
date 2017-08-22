Sample State
-
```javascript
{
  entities: {
    forms: {
      signUp: {errors: []},
      logIn: {errors: []},
      createWorkout: {errors: ["Name Can't Be Blank"]}
      createResult: {errors: ["Exercise Can't Be Blank"]}
    },
    users: {
      1: {
        username: "Austin"
        email: "austin.stehling@gmail.com"
        gender: "male"
        DOB: "07/28/90"
      }
    },
    workouts: {
      1: {
        name: "Fran",
        user_id: 1
        exercises: [1,2]
      }
    },
    exercise: {
      1: {
        name: "Thrusters",
        workout_id: 1
        result: 1
      },
      2: {
        name: "Pull-ups"
        workout_id: 1
        result: 2
      }
    },
    results: {
      1: {
        exercise_id: 1,
        sets: 3,
        reps: [21, 15, 9]
      }
      2: {
        exercise_id: 2,
        sets: 3,
        reps: [21, 15, 9]
      }
    },
  },
  ui: {
    currentUser: {
      id: 1,
      workouts_ids: [1,2,3,4,5]
    }
    currentWorkout {
      workoutId: 1
    }
  }
}
```
