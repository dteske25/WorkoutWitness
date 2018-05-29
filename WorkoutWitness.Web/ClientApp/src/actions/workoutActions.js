import * as helpers from './fetchHelpers';
import * as types from './actionTypes';

export function requestWorkoutsAction() {
  return { type: types.requestWorkouts };
}

export function receivedWorkoutsAction(data) {
  return { type: types.receiveWorkouts, data };
}

export function requestExercisesAction() {
  return { type: types.requestExercises };
}

export function receivedExercisesAction(data) {
  return { type: types.receiveExercises, data };
}


export function LoadWorkouts() {
  return dispatch => {
    dispatch(requestWorkoutsAction());
    return helpers.Get('/api/workout')
      .then(response => response.json())
      .then(json => dispatch(receivedWorkoutsAction(json)))
      .catch(err => (console.error(err)));
  }
}

export function LoadExercisesForWorkout(id) {
  return dispatch => {
    dispatch(requestExercisesAction());
    return helpers.Get(`/api/exercise/${id}`)
    .then(response => response.json())
    .then(json => dispatch(receivedExercisesAction(json)))
    .catch(err => console.error(err));
  }
}