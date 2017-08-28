import workoutReducer from './workoutReducer';
import createWorkoutReducer from './createWorkoutReducer';
import userReducer from './userReducer';

const initialState = {
  workouts: {
    workoutList: [1, 2, 3],
    workoutsById: {
      '1': {
        id: 1,
        name: "Push Day"
      },
      '2': {
        id: 2,
        name: "Pull Day"
      },
      '3': {
        id: 3,
        name: "Rest Day"
      }
    },
  },
  createWorkout: {
    workoutName: '',
    date: new Date(),
    exercises: [],
  },
  user: {
    login: "",
    firstName: "",
    lastName: "",
  },
};

export function rootReducer(state = initialState, action){
  return {
    workouts: workoutReducer(state.workouts, action),
    createWorkout: createWorkoutReducer(state.createWorkout, action),
    user: userReducer(state.user, action)
  };
}