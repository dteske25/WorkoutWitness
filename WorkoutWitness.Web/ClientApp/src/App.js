import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import WelcomeView from './views/WelcomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import WorkoutCreatorView from './views/WorkoutCreatorView';
import WorkoutListView from './views/WorkoutListView';
import WorkoutView from './views/WorkoutView';
import ProfileView from './views/ProfileView';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2e7d32',
      contrastText: '#fff',
    },
    overrides: {
      MuiButton: {
        root: {
          color: '#fff', 
        },
      },
    },
  },
});


export default class App extends Component {
  displayName = App.name

  render() {
    const generateClassName = createGenerateClassName();
    const jss = create(jssPreset());
    // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
    jss.options.insertionPoint = document.getElementById('jss-insertion-point');
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Layout>
            <Route exact path="/" component={WelcomeView} />
            <Route path="/login" component={LoginView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/create" component={WorkoutCreatorView} />
            <Route path="/list" component={WorkoutListView} />
            <Route path="/list/:id" component={WorkoutView} />
            <Route path="/profile" component={ProfileView} />
          </Layout>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}
