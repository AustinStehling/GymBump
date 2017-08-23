import values from 'lodash/values';

export const selectAllMembers = state => values(state.members.users)
