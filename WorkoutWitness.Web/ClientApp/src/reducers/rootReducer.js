import userReducer from './userReducer';
import workoutReducer from './workoutReducer';
import workoutCreatorReducer from './workoutCreatorReducer';
import workoutViewReducer from './workoutViewReducer';
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
  },
  workoutView: {
    loading: false,
    exercises: []
  }
}

function rootReducer(state = initialState, action) {
  return {
    user: userReducer(state.user, action),
    workouts: workoutReducer(state.workouts, action),
    workoutCreator: workoutCreatorReducer(state.workoutCreator, action),
    workoutView: workoutViewReducer(state.workoutView, action)
  }
}

export default rootReducer;