import * as types from '../actions/actionTypes';

export default function workoutReducer(state, action) {
  switch (action.type) {
    case types.requestWorkouts:
      return {
        loading: true,
        ...state
      };
    case types.receiveWorkouts:
      return {
        loading: false,
        list: action.data,
        ...state
      };
    default:
      return state;
  }
}
