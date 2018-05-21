import userReducer from './userReducer';
import workoutReducer from './workoutReducer';
import workoutCreatorReducer from './workoutCreatorReducer';

const initialState = {
  user: {
    firstName: null,
    lastName: null,
    id: null,
  },
  workouts: {
    loading: false,
    list: []
  },
  workoutCreator: {
    
  }
}

function rootReducer(state = initialState, action) {
  return {
    user: userReducer(state.user, action),
    workouts: workoutReducer(state.workouts, action),
    workoutCreator: workoutCreatorReducer(state.workoutCreator, action),
  }
}

export default rootReducer;