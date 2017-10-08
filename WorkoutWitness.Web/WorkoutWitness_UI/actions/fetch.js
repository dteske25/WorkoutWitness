require('es6-promise').polyfill();
import 'isomorphic-fetch';
import * as types from './types';



export function WorkoutFetchAction(data) {
    return {
        type: types.WORKOUT_FETCH,
        data
    }
}


export function fetchWorkouts(dispatch) {
    fetch('/api/workout')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            dispatch(WorkoutFetchAction(data));
        });
}
