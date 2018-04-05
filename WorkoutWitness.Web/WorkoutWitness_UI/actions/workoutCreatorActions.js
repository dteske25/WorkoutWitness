import * as types from './types';

export function CurrentExerciseValueChange(label, value) {
    return {
        type: types.WORKOUTCREATOR_EDIT_CURRENT_EXERCISE,
        label,
        value
    };
}

export function WorkoutDone() {
    return {
        type: types.WORKOUTCREATOR_DONE
    };
}

export function WorkoutNameChange(value) {
    return {
        type: types.WORKOUTCREATOR_EDIT_WORKOUT_NAME,
        value
    };
}

export function NextExercise() {
    return {
        type: types.WORKOUTCREATOR_NEXT_EXERCISE
    };
}

export function PrevExercise() {
    return {
        type: types.WORKOUTCREATOR_PREV_EXERCISE
    };
}