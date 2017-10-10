import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import workoutReducer from './workoutReducer';


export const initialState = {
    workouts: [],
    currentWorkout: ''
}

function index(state = initialState, action){
    return {
        workouts: workoutReducer(state.workouts, action)
    }
};

export const rootReducer = combineReducers({
    index,
    routing
}); 

