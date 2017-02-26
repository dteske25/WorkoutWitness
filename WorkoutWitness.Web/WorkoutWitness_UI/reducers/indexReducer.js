import workouts from './workoutReducer';

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
  user: {
    login: "",
    firstName: "",
    lastName: "",
  }
}

export function rootReducer(state = initialState, action){
  return {
    workouts: workouts(state.workouts, action),
    user: state.user
  };
}