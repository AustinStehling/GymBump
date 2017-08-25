export const fetchExercises = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/exercises'
  });
}
