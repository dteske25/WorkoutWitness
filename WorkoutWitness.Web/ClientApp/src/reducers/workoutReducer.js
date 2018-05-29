import * as types from '../actions/actionTypes';

export default function workoutReducer(state, action) {
  switch (action.type) {
    case types.requestWorkouts:
      return {
        ...state,
        loading: true,
      };
    case types.receiveWorkouts:
      return {
        ...state,
        loading: false,
        list: action.data,
      };
    default:
      return state;
  }
}
