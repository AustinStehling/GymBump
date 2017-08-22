Component Hierarchy
-

AuthFormContainer
-
  * AuthForm

  * HomeContainer

Home - Logged Out
-
  * Home Page with SignUp/Sign In Links

User Show/Home Page
-
  * Sidebar with User Information
  * Link to show page of each workout
  * mapStateToProps - user: state.entities.users[state.ui.currentUser.id]
  * mapStateToProps - Selector that does something like so to retrieve user workouts -
      state.entities.workouts[id]
  * mapDispatchToProps - Request All Workouts, Create Workout
  * After submitting name to current workout, Link takes you to create workout page.
  * New Workout Component

Leaderboard - Index Page
-
  * Posting All Users Results For Selected Crossfit Workout
  * mapStateToProps - Select All workouts
  * mapDispatchToProps - Request All Workouts
  * Link - User Show Page (Home Page)

New Workout Container
-
  * mapDispatchToProps createWorkout

Workout Show Container
-
  * mapStateToProps workout: state.entities.workouts[state.ui.currentWorkout]
  * mapDispatchToProps - receiveSingleWorkout, deleteWorkout

Workout Show
-
  * Link - Edit Workout
  * Button - Delete Workout

New Workout Page
-
  * New Result Form Component
  * Submit Button

New Result Form  
-
  * create button

New Result Form Container
-
  * mapDispatchToProps createResult

Workout Edit Show
-
  * Edit Result Form Component

Edit Workout Container
-
  * Edit Result Form Component
  * mapStateToProps workout: state.entities.workouts[state.ui.workoutId]
  * mapDispatchToProps updateWorkout, deleteWorkout

Edit Result Form Container
-
  * mapStateToProps result: state.entities.results[state.ui.currentWorkout.resultId]
  * mapDispatchToProps updateResult

Edit Result Form
-
  * update button
  * prefilled form with current input.

Routes
-

Path                   | Component
-----------------------|-----------
"/sign-up"             | "AuthFormContainer"
"/sign-in"             | "AuthFormContainer"
"/home"	               | "HomeContainer"
"/workouts/:workoutId  | "WorkoutResultsContainer"
"/new-workout"	       | "NewWorkoutContainer"
"/edit/:workoutId      | "EditResult"
"/workouts"            | "Workouts Index/Leaderboard Page"
