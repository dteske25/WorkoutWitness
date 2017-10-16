import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import NavMenu from './NavMenu';
import * as WorkoutActions from '../actions/workoutActions';
import * as ExerciseActions from '../actions/exerciseActions';

import './App.scss';

export default class App extends React.Component {
    render() {
        return (<div>
            <NavMenu />
            <div className={'container-fluid'}>
                {this.props.children}
            </div>
        </div>);
    }
}
