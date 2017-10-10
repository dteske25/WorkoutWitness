import 'isomorphic-fetch';
import * as types from './types';
import * as WorkoutActions from './workoutActions';

export function loadWorkouts() {
    return dispatch => {
        fetch('/api/workout')
        .then(response => response.json())
        .then(data => dispatch(WorkoutActions.WorkoutFetchAction(data)));
    }
}
