import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface WorkoutListState {
    isLoading: boolean;
    workouts: Workout[];
}

export interface Workout {
    name: string;
    date: Date;
    userId: string;
    id: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestWorkoutsAction {
    type: 'REQUEST_WORKOUTS';
}

interface ReceiveWorkoutsAction {
    type: 'RECEIVE_WORKOUTS';
    workouts: Workout[];
}

interface CreateWorkoutAction {
    type: 'CREATE_WORKOUT';
    workout: Workout;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestWorkoutsAction | ReceiveWorkoutsAction | CreateWorkoutAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestWorkouts: (): AppThunkAction<KnownAction> => (dispatch) => {
        let fetchTask = fetch('api/workout')
            .then(response => response.json() as Promise<Workout[]>)
            .then(data => {
                dispatch({ type: 'RECEIVE_WORKOUTS', workouts: data });
            });
        addTask(fetchTask);
        dispatch({ type: 'REQUEST_WORKOUTS' });
    },
    addWorkout: (name: string, date: Date | null): AppThunkAction<KnownAction> => (dispatch, getState) => {
        let fetchTask = fetch('api/workout',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, date })
            })
            .then(response => response.json() as Promise<Workout>)
            .then(data => {
                dispatch({ type: 'CREATE_WORKOUT', workout: data });
            });
        addTask(fetchTask);
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: WorkoutListState = { workouts: [], isLoading: false };

export const reducer: Reducer<WorkoutListState> = (state: WorkoutListState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_WORKOUTS':
            return Object.assign({}, state, { isLoading: true });
        case 'RECEIVE_WORKOUTS':
            return Object.assign({}, state, { isLoading: false, workouts: action.workouts });
        case 'CREATE_WORKOUT':
            const oldList = state.workouts;
            oldList.push(action.workout);
            return Object.assign({}, state, { workouts: oldList });
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
