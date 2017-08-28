export const createWorkout = workout => {
  return $.ajax({
    method: 'POST',
    url: 'api/workouts',
    data: { workout }
  });
}

export const fetchWorkout = id => {
  return $.ajax({
    method: 'GET',
    url: `api/workouts/${id}`
  });
}

export const deleteWorkout = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/workouts/${id}`
  })
}
