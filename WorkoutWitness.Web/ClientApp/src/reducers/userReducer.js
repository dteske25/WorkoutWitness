import * as types from '../actions/actionTypes';

export default function userReducer(state, action) {
  switch(action.type){
    case types.registerUser:
    case types.loginUser:
      localStorage.setItem("currentUser", JSON.stringify(action.data));
      return action.data;
    case types.logoutUser:
      localStorage.removeItem("currentUser");
      return { 
        firstName: null,
        lastName: null,
        id: null,
      };
    default:
      return state;
  }
}

