import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import mapDispatchToProps from '../actions';
import ExerciseCard from '../components/ExerciseCard';

import TextField from '@material-ui/core/TextField';

export class WorkoutCreatorView extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const month = `${today.getMonth() + 1}`;
        this.state = {
            name: '',
            date: `${today.getFullYear()}-${month.padStart(2, '0')}-${today.getDate()}`
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { name, date } = this.state;
        const exercises = [
            <ExerciseCard key={1} exercise={{id:1, name: "One", weight: 100, reps: 10, sets: 3}} />,
            <ExerciseCard key={2} exercise={{id:2, name: "Two", weight: 105, reps: 10, sets: 3}} />,
            <ExerciseCard key={3} exercise={{id:3, name: "Three", weight: 110, reps: 10, sets: 3}} />,
            <ExerciseCard key={4} exercise={{id:4, name: "Four", weight: 115, reps: 10, sets: 3}} />,
            <ExerciseCard key={5} exercise={{id:5, name: "Five", weight: 120, reps: 10, sets: 3}} />,
            <ExerciseCard key={6} exercise={{id:6, name: "Six", weight: 125, reps: 10, sets: 3}} />
        ];

        return (<div>
            WorkoutCreatorView
            <br />
            <TextField
                label="Workout Name"
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                required
            />
            <TextField
                label="Workout Date"
                type="date"
                required
                value={this.state.date}
                onChange={this.handleChange("date")}
            />
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {exercises}
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        workouts: state.workouts
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutCreatorView));