import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import workoutReducer from './workoutReducer';
import exerciseReducer from './exerciseReducer';


export const initialState = {
    workouts: [],
    exercises: []
};

function index(state = initialState, action){
    return {
        workouts: workoutReducer(state.workouts, action),
        exercises: exerciseReducer(state.exercises, action)
    };
}

export const rootReducer = combineReducers({
    index,
    routing
}); 

