import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ExerciseState {
    isLoading: boolean;
    workoutId: string;
    exercises: Exercise[];
}

export interface Exercise {
    id: string;
    name: string;
    weight?: number;
    reps?: number;
    sets?: number;
    distance?: number;
    time?: TimeRanges;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestExercises {
    type: 'REQUEST_EXERCISES';
    workoutId: string;
}

interface ReceiveExercises {
    type: 'RECEIVE_EXERCISES';
    exercises: Exercise[];
}

interface CreatedExercise {
    type: 'CREATE_EXERCISE';
    exercise: Exercise;
}

interface DeleteExercise {
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestExercises | ReceiveExercises | CreatedExercise;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestExercises: (workoutId: string): AppThunkAction<KnownAction> => (dispatch) => {
        let fetchTask = fetch(`/api/exercise/${workoutId}`)
            .then(response => response.json() as Promise<Exercise[]>)
            .then(data => {
                dispatch({ type: 'RECEIVE_EXERCISES', exercises: data });
            });
        addTask(fetchTask);
        dispatch({ type: 'REQUEST_EXERCISES', workoutId });
    },
    addExercise: (workoutId: string, exercise: Exercise): AppThunkAction<KnownAction> => (dispatch, getState) => {
        let fetchTask = fetch(`/api/exercise/${workoutId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(exercise)
            })
            .then(response => response.json() as Promise<Exercise>)
            .then(data => {
                dispatch({ type: 'CREATE_EXERCISE', exercise: data });
            });
        addTask(fetchTask);
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: ExerciseState = { exercises: [], isLoading: false, workoutId: '' };

export const reducer: Reducer<ExerciseState> = (state: ExerciseState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_EXERCISES':
            return Object.assign({}, state, {
                isLoading: true,
                workoutId: action.workoutId
            });
        case 'RECEIVE_EXERCISES':
            return Object.assign({}, state, {
                isLoading: false,
                exercises: action.exercises
            })
        case 'CREATE_EXERCISE':
            return Object.assign({}, state, {
                exercises: state.exercises.concat(action.exercise)
            });
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
