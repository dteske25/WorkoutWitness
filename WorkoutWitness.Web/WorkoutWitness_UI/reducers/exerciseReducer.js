import * as types from '../actions/types';

const exerciseReducer = (state, action) => {
    switch (action.type) {
        case types.EXERCISE_FETCH:
            return action.data;
        default:
            return state;
    }
};

export default exerciseReducer;
