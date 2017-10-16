﻿import * as types from '../actions/types';

const workoutReducer = (state, action) => {
    switch (action.type) {
        case types.WORKOUT_FETCH:
            return action.data;
        default:
            return state;
    }
};

export default workoutReducer;
