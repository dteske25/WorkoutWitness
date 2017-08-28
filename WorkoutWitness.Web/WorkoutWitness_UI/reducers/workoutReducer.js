import * as types from '../constants/ActionTypes';

export default function workoutReducer(state, action){
  switch (action.type){
    case types.ADD_WORKOUT:
      const newId = state.workouts[state.workoutList.length-1] + 1;
      return {
        workoutList: state.workoutList.concat(newId),
        workoutsById: Object.assign({}, state.workoutsById, {
          [newId]: {
            id: newId,
            name: action.name,
          }
        }),
      };
    case types.DEL_WORKOUT:
      return Object.assign({}, state, {
        workoutList: state.workoutList.filter(id => id !== action.id),
        workoutsById: omit(state.workoutsById, action.name),
      });
    default:
      return state;
  }
}