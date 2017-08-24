export const createWorkout = workout => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/workouts',
    data: { workout }
  });
}

export const fetchWorkout = id => {
  return $.ajax({
    method: 'GET',
    url: `api/workouts/${workout.id}`
  });
}
