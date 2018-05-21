import * as helpers from './fetchHelpers';
import * as types from './actionTypes';

export function requestWorkoutsAction() {
  return { type: types.requestWorkouts };
}

export function receivedWorkoutsAction(data) {
  return { type: types.receiveWorkouts, data };
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