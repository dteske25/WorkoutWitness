import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import workoutReducer from './workoutsReducer';


const initialState = {
    workouts: [{}],
    currentWorkout: ''
}

const index = (state = initialState, action) => {
    workouts: workoutReducer(state.workouts, action)
};


const rootReducer = combineReducers({
    index,
    routing
}); 

export default rootReducer;
