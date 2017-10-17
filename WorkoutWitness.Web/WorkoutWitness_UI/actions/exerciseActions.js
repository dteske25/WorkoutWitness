import * as types from './types';

export function ExerciseFetchAction(data) {
    return {
        type: types.EXERCISE_FETCH,
        data
    };
}

export function ExerciseAddAction(data) {
    return {
        type: types.EXERCISE_ADD,
        data
    };
}

export function ExerciseEditAction(data) {
    return {
        type: types.EXERCISE_EDIT,
        data
    };
}

