import * as helpers from './fetchHelpers';
import * as types from './actionTypes';
import moment from 'moment';

export function editWorkoutAction(data) {
  return { type: types.editWorkout, data }
};

export function saveWorkoutAction(data) {
  return { type: types.saveWorkout, data }
};

export function saveExerciseAction(data) {
  return { type: types.saveExercise, data }
};

export function removeExerciseAction(data) {
  return { type: types.removeExercise, data }
};

export function editExerciseAction(data) {
  return { type: types.editExercise, data }
};

export function saveWorkout(name, date, id) {
  const parsedDate = moment(date);
  return dispatch => {
    return helpers.Post('/api/workout', { workoutName: name, workoutDate: parsedDate.format(), workoutId: id })
    .then(response => response.json())
    .then(json => dispatch(saveWorkoutAction(json)))
    .catch(err => console.error(err));
  }
}

export function saveExercise(workoutId, exerciseData) {
  return dispatch => {
    return helpers.Post(`/api/exercise/${workoutId}`, exerciseData)
    .then(response => response.json())
    .then(json => dispatch(saveExerciseAction(json)))
    .catch(err => console.error(err));
  }
}
