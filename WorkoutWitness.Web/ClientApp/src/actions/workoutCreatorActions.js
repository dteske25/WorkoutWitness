import * as helpers from './fetchHelpers';
import * as types from './actionTypes';

export function changeWorkoutNameAction(data) {
  return { type: types.changeWorkoutName, data }
};

export function changeWorkoutDateAction(data) {
  return { type: types.changeWorkoutDate, data }
};

export function addExerciseAction(data) {
  return { type: types.addExercise, data }
};

export function removeExerciseAction(data) {
  return { type: types.removeExercise, data }
};

export function saveExerciseAction(data) {
  return {type: types.saveExercise, data }
};