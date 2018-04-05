import * as types from '../actions/types';
import { initialState } from './index';

const workoutCreatorReducer = (state, action) => {
    switch (action.type) {
        case types.WORKOUTCREATOR_DONE:
            return initialState.workoutCreator;
        case types.WORKOUTCREATOR_EDIT_WORKOUT_NAME:
            return Object.assign({}, state, {
                'workoutName': action.value
            });
        case types.WORKOUTCREATOR_EDIT_CURRENT_EXERCISE:
            const editedExercise = Object.assign({}, state.currentExercise, {
                [action.label]: action.value
            });
            return Object.assign({}, state, {
                'currentExercise': editedExercise
            });
        case types.WORKOUTCREATOR_NEXT_EXERCISE:
            const nextIndex = state.currentIndex + 1;
            let nextExercise = {};
            if (nextIndex >= state.exercises.length) {
                nextExercise = {
                    'id': '',
                    'name': '',
                    'weight': 0,
                    'reps': 0,
                    'sets': 0
                }
            } else {
                nextExercise = state.exercises[nextIndex];
            }
            return Object.assign({}, state, {
                'currentIndex': nextIndex,
                'currentExercise': nextExercise,
            });
        case types.WORKOUTCREATOR_PREV_EXERCISE:
            const prevIndex = state.currentIndex >= 1 ? state.currentIndex - 1 : 0;
            let prevExercise = state.exercises[prevIndex];
            if (!prevExercise) {
                prevExercise = {
                    'id': '',
                    'name': '',
                    'weight': 0,
                    'reps': 0,
                    'sets': 0
                }
            }
            return Object.assign({}, state, {
                'currentIndex': prevIndex,
                'currentExercise': prevExercise
            });
        case types.WORKOUT_CREATE:
            return Object.assign({}, state, {
                'workoutName': action.data.name,
                'workoutId': action.data.id
            });
        case types.EXERCISE_ADD:
            const addedExercises = state.exercises;
            addedExercises.push(action.data);
            return Object.assign({}, state, {
                'exercises': addedExercises
            });
        case types.EXERCISE_EDIT:
            const editedExercises = state.exercises;
            const editedIndex = editedExercises.findIndex(e => e.id == action.data.id);
            editedExercises[editedIndex] = action.data;
            return Object.assign({}, state, {
                'exercises': editedExercises
            });
        default:
            return state;
    }
};

export default workoutCreatorReducer;
