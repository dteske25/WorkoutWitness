import * as types from '../actions/actionTypes';

export default function workoutViewReducer(state, action) {
  switch (action.type) {
    case types.requestExercises:
    return {
      ...state,
      loading: true,
    };
    case types.receiveExercises: 
    return {
      ...state,
      loading: false,
      exercises: action.data
    };
    default:
      return state;
  }
} 