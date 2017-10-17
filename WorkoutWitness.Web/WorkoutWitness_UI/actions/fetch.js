import 'isomorphic-fetch';
import * as types from './types';
import * as WorkoutActions from './workoutActions';
import * as ExerciseActions from './exerciseActions';
import * as WorkoutCreatorActions from './workoutCreatorActions';

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

export function postNewWorkout(workoutName) {
    return dispatch => {
        fetch('/api/workout', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(workoutName)
        })
            .then(response => response.json())
            .then(data => {
                dispatch(WorkoutActions.WorkoutCreatedAction(data));
            });
    };
}

export function postExercise(workoutId, exercise) {
    return dispatch => {
        fetch(`/api/exercise/${workoutId}`, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(exercise)
        })
            .then(response => response.json())
            .then(data => {
                if (exercise.id) {
                    dispatch(ExerciseActions.ExerciseEditAction(data));
                } else {
                    dispatch(ExerciseActions.ExerciseAddAction(data));
                }
            })
    };
}
