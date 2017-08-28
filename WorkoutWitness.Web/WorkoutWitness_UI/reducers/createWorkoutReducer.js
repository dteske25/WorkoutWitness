import * as types from '../constants/ActionTypes';

export default function createWorkoutReducer(state, action){
  switch (action.type) {
    case types.WORKOUT_ADD_EXERCISE:
      const time = new Date();
      time.setMinutes(0);
      time.setHours(0);
      const exercise = {
        id: new Date().getTime(),
        type: action.exerciseType,
        name: '',
        weight: '',
        sets: '',
        reps: '',
        distance: '',
        time
      };
      return {
        ...state,
        exercises:[...state.exercises, exercise],
      };
    case types.WORKOUT_REMOVE_EXERCISE:
      const tempExercises = state.exercises.filter(e => e.id != action.id);
      return {
        ...state,
        exercises: tempExercises, 
      };
    case types.WORKOUT_MODIFY_EXERCISE:
      const index = state.exercises.findIndex(e => {
        return e.id === action.id;
      });
      const temp = state.exercises[index];
      temp[action.name] = action.value;
      return {
        ...state,
        exercises: state.exercises.map((exercise, i) => i === index ? temp : exercise),
      };
    case types.WORKOUT_MODIFY_NAME:
      return {
        ...state,
        workoutName: action.value,
      };
    case types.WORKOUT_MODIFY_DATE:
      return {
        ...state,
        date: action.value,
      }
    default:
      return state;
  }
}