import * as React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App';
import Workouts from './components/Workouts';
import Workout from './components/Workout';
import WorkoutCreator from './components/WorkoutCreator';

export const routes = <App>
    <Route exact path='/' component={Workouts} />
    <Route exact path='/workout/:id' component={Workout} />
    <Route exact path='/create/' component={WorkoutCreator} />
</App>;
