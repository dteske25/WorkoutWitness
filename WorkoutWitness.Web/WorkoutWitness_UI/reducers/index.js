import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import workoutReducer from './workoutReducer';
import exerciseReducer from './exerciseReducer';
import workoutCreatorReducer from './workoutCreatorReducer';
import userReducer from './userReducer';


export const initialState = {
    user: {
        'token': '',
    },
    workouts: [],
    exercises: [],
    workoutCreator: {
        'workoutName': '',
        'workoutId': '',
        'currentIndex': 0,
        'currentExercise': {
            'id': '',
            'name': '',
            'weight': 0,
            'reps': 0,
            'sets': 0
        },
        'exercises': []
    }
};

function index(state = initialState, action){
    return {
        workouts: workoutReducer(state.workouts, action),
        exercises: exerciseReducer(state.exercises, action),
        workoutCreator: workoutCreatorReducer(state.workoutCreator, action),
        user: userReducer(state.user, action)
    };
}

export const rootReducer = combineReducers({
    index,
    routing
}); 

