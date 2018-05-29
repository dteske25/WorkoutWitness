import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import mapDispatchToProps from '../actions';
import ExerciseEditorComponent from '../components/ExerciseEditorComponent';

import { TextField, Button, Grid } from '@material-ui/core';

export class WorkoutCreatorView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            weight: '',
            reps: '',
            sets: '',
            distance: '',
            time: '',
        }
    }

    handleNameChange = (event) => {
        const { workoutCreatorActions } = this.props;
        workoutCreatorActions.editWorkoutAction({ name: 'workoutName', value: event.target.value });
    }

    handleDateChange = (event) => {
        const { workoutCreatorActions } = this.props;
        workoutCreatorActions.editWorkoutAction({ name: 'date', value: event.target.value });
    }

    handleSaveWorkout = () => {
        const { workoutCreatorActions, workoutCreator } = this.props;
        workoutCreatorActions.saveWorkout(workoutCreator.workoutName, workoutCreator.date, workoutCreator.id);
    }

    handleAddExercise = (event, name) => {
        const { workoutCreatorActions, workoutCreator } = this.props;
        this.setState({
            [name]: event.target.value
        });
    }

    handleAddExerciseButton = () => {
        const { name, weight, reps, sets, distance, time } = this.state;
        const { workoutCreatorActions, workoutCreator } = this.props;
        workoutCreatorActions.addExercise(workoutCreator.workoutId, {
            name,
            weight,
            reps,
            sets,
            distance,
            time
        });
        this.setState({
            name: '',
            weight: '',
            reps: '',
            sets: '',
            distance: '',
            time: '',
        });
    }

    handleEditExercise = (event, name, id) => {
        const { workoutCreatorActions } = this.props;
        workoutCreatorActions.editExerciseAction({ id, name, value: event.target.value });
    }


    render() {
        const { workoutName, date, id, exercises } = this.props.workoutCreator;
        const renderedEditors = exercises.map(exercise => {
            return (
                <Grid item xs={12} key={exercise.id}>
                    <ExerciseEditorComponent
                        id={exercise.id}
                        name={exercise.name}
                        weight={exercise.weight}
                        reps={exercise.reps}
                        sets={exercise.sets}
                        distance={exercise.distance}
                        time={exercise.time}
                        onChange={this.handleEditExercise}
                    />
                    <Button>Delete</Button>
                </Grid>);
        });

        return (<Grid container spacing={16}>
            <Grid item>
                <TextField
                    label="Workout Name"
                    required
                    value={workoutName}
                    onBlur={this.handleSaveWorkout}
                    onChange={this.handleNameChange}
                    margin="normal"
                    fullWidth
                />
            </Grid>
            <Grid item>
                <TextField
                    label="Workout Date"
                    type="date"
                    required
                    value={date}
                    onChange={this.handleDateChange}
                    onBlur={this.handleSaveWorkout}
                    margin="normal"
                    fullWidth
                />
            </Grid>
            {renderedEditors}
            <Grid item xs={12}>
                <ExerciseEditorComponent
                    name={this.state.name}
                    weight={this.state.weight}
                    reps={this.state.reps}
                    sets={this.state.sets}
                    distance={this.state.distance}
                    time={this.state.time}
                    onChange={this.handleAddExercise}
                />
                <Button onClick={this.handleAddExerciseButton}>
                    Add Exercise
                </Button>
            </Grid>
        </Grid>);
    }
}

function mapStateToProps(state) {
    return {
        workoutCreator: state.workoutCreator
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkoutCreatorView));