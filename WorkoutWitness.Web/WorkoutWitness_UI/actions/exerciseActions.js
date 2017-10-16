import * as types from './types';

export function ExerciseFetchAction(data) {
    return {
        type: types.EXERCISE_FETCH,
        data
    };
}