import 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';


export function createWorkoutSuccess(workout){
  return {
    type: types.WORKOUT_CREATE_SUCCESS,
    workout,
  };
}

export function addExercise(exerciseType){
  return {
    type: types.WORKOUT_ADD_EXERCISE,
    exerciseType,
  };
}

export function removeExercise(id){
  return {
    type: types.WORKOUT_REMOVE_EXERCISE,
    id,
  };
}

export function modifyExercise(id, name, value){
  return {
    type: types.WORKOUT_MODIFY_EXERCISE,
    id,
    name,
    value,
  };
}

export function modifyWorkoutName(value){
  return {
    type: types.WORKOUT_MODIFY_NAME,
    value,
  };
}

export function modifyWorkoutDate(value){
  return {
    type: types.WORKOUT_MODIFY_DATE,
    value,
  }
}

export function createNewWorkout(data){
  fetch('/api/workout/create/', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data
    })
  }) 
  .then(response => response.json())
  .then(json => {
    console.log(json);
    createWorkoutSuccess(json);
  });
}

