import values from 'lodash/values';

export const selectAllMembers = state => values(state.entities.members)
export const selectAllExercises = state => values(state.entities.exercise)

export const selectMembersWorkouts = state => {
  if (state.entities.members.selected) {
    return state.entities.members.selected.workouts.map(id => state.entities.workout[id])
  } else {
    return [];
  }
}
