import 'isomorphic-fetch';
import * as types from './types';
import * as WorkoutActions from './workoutActions';
import * as ExerciseActions from './exerciseActions';

export function loadWorkouts() {
    return dispatch => {
        fetch('/api/workout')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map(w => {
                    w.date = new Date(w.date);
                    return w;
                });
                dispatch(WorkoutActions.WorkoutFetchAction(formattedData));
            });
    };
}

export function loadExercisesForWorkoutId(id) {
    return dispatch => {
        fetch(`/api/exercise/${id}`)
            .then(response => response.json())
            .then(data => {
                dispatch(ExerciseActions.ExerciseFetchAction(data));
            });
    };
}

export function postNewWorkout(workoutName, exercises) {
    return dispatch => {
        fetch('/api/workout', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'name': workoutName,
                'date': new Date(),
                exercises
            })
        });
    };
}
