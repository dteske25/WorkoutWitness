import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import Workouts from './components/Workouts';
import Workout from './components/Workout';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route exact path='/workouts' component={Workouts} />
    <Route path='/workouts/:workoutId' component={Workout} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
</Layout>;
