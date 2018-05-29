import * as types from '../actions/actionTypes';
import moment from 'moment';

export default function workoutCreatorReducer(state, action) {
  switch (action.type) {
    case types.editWorkout:
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
      const ids = state.exercises.map(e => e.id);
      if (ids.indexOf(action.data.id) > -1) {
        return {
          ...state,
          exercises: state.exercises.map(e => {
            if (e.id === action.data.id) {
              return action.data;
            }
            return e;
          })
        };
      } else {
        return {
          ...state,
          exercises: state.exercises.concat([action.data])
        }
      }
    case types.resetWorkoutCreator:
      return {
        date: moment().format('YYYY-MM-DD'),
        workoutName: '',
        workoutId: null,
        exercises: [],
      }
    default:
      return state;
  }
}
