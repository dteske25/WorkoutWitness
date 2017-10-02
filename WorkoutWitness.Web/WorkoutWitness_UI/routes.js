import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout';
import App from './components/App';

export const routes = <Layout>
    <Route exact path='/' component={App} />
</Layout>;
