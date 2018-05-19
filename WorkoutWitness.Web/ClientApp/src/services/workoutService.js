import * as helpers from './fetchHelpers';

export function LoadWorkouts() {
    return helpers.Get('/api/workout');
}