import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout';
import App from './components/App';
import Workouts from './components/Workouts';

export const routes = <Layout>
    <Route exact path='/' component={App} />
    <Route exact path='/workouts' component={Workouts} />
</Layout>;
