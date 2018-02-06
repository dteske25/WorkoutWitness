import * as types from '../actions/types';

const userReducer = (state, action) => {
    switch (action.type) {
        case types.USER_CREATE:
        case types.USER_LOGIN:
            return action.data;
        case types.USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export default userReducer;
