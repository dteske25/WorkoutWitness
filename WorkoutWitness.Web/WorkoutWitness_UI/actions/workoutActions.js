import * as types from './types';

export function WorkoutFetchAction(data) {
    return {
        type: types.WORKOUT_FETCH,
        data
    };
}

export function WorkoutCreatedAction(data) {
    return {
        type: types.WORKOUT_CREATE,
        data
    };
}
