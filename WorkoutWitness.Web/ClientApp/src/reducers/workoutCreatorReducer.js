import * as types from '../actions/actionTypes';

export default function workoutCreatorReducer(state, action) {
  switch (action.type) {
    case types.editWorkout:
      console.log({ state, action });
      return {
        ...state,
        [action.data.name]: action.data.value,
      }
    case types.saveWorkout:
      return {
        ...state,
        workoutId: action.data.id
      }
    case types.saveExercise:
      return {
        ...state,
        exercises: state.exercises.map(e => {
          if (e.id === action.data.id) {
            return {
              ...e,
              [action.data.name]: action.data.value
            };
          }
          return e;
        })
      };
    default:
      return state;
  }
}
