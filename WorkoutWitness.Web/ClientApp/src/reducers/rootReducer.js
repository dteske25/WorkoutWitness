import userReducer from './userReducer';
import workoutReducer from './workoutReducer';
import workoutCreatorReducer from './workoutCreatorReducer';
import moment from 'moment';

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
    date: moment().format('YYYY-MM-DD'),
    workoutName: '',
    workoutId: null,
    exercises: [],
    activeIndex: 0,
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