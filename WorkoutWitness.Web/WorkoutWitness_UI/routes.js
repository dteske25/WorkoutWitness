import * as React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App';
import Workouts from './components/Workouts';
import Workout from './components/Workout';
import WorkoutCreator from './components/WorkoutCreator';
import Login from './components/Login';
import Register from './components/Register';

export const routes = <App>
    <switch>
        <Route exact path='/' component={Workouts} />
        <Route path='/workout/:id' component={Workout} />
        <Route path='/create/' component={WorkoutCreator} />
        <Route path='/login/' component={Login}/>
        <Route path='/register/' component={Register} />
    </switch>
</App>;
