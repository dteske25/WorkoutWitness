import * as types from '../constants/ActionTypes';

export function addWorkout(name){
  return {
    type: types.ADD_WORKOUT,
    name
  };
}

export function deleteWorkout(id){
  return {
    type: types.DEL_WORKOUT,
    id
  };
}