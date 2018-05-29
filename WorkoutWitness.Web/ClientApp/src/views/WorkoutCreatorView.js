import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapDispatchToProps from '../actions';
import ExerciseEditorComponent from '../components/ExerciseEditorComponent';
import { TextField, Grid, Button, Divider } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight, Save } from '@material-ui/icons';

export class WorkoutCreatorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      currentExercise: {
        id: null,
        name: null,
        weight: null,
        reps: null,
        sets: null,
        distance: null,
        time: null,
      }
    }
  }

  handleExerciseDataChange = (event, name) => {
    const { currentExercise } = this.state;
    currentExercise[name] = event.target.value;
    this.setState({ currentExercise });
  }

  handleExerciseDataSave = () => {
    const { currentExercise } = this.state;
    const { workoutCreator, workoutCreatorActions } = this.props;
    workoutCreatorActions.saveExercise(workoutCreator.workoutId, currentExercise);
  }

  handleWorkoutDataChange = (event, name) => {
    const { workoutCreatorActions } = this.props;
    workoutCreatorActions.editWorkoutAction({
      name,
      value: event.target.value
    });
  }

  handleWorkoutDataSave = () => {
    const { workoutCreator, workoutCreatorActions } = this.props;
    workoutCreatorActions.saveWorkout(workoutCreator.workoutName, workoutCreator.date, workoutCreator.workoutId);
  }

  handleNextButton = () => {
    if (this.isValidExercise()) {
      this.handleExerciseDataSave();
    }
    const { activeIndex } = this.state;
    this.loadExerciseIntoState(activeIndex + 1);
  }

  handleBackButton = () => {
    if (this.isValidExercise()) {
      this.handleExerciseDataSave();
    }
    const { activeIndex } = this.state;
    this.loadExerciseIntoState(activeIndex - 1);
  }

  handleDoneButton = () => {
    const { workoutCreatorActions, history } = this.props;
    if (this.isValidExercise()) {
      this.handleExerciseDataSave();
    }
    workoutCreatorActions.resetWorkoutCreatorAction();
    history.push("/list");
  }

  loadExerciseIntoState = (nextIndex) => {
    const { exercises } = this.props.workoutCreator;
    let currentExercise = {
      id: null,
      name: null,
      weight: null,
      reps: null,
      sets: null,
      distance: null,
      time: null,
    };
    if (exercises[nextIndex]) {
      currentExercise = exercises[nextIndex];
    }
    this.setState({
      currentExercise,
      activeIndex: nextIndex
    });
  }

  isValidExercise = () => {
    const { name, weight, reps, sets, distance, time } = this.state.currentExercise;
    return name && (weight || reps || sets || distance || time);
  }

  render() {
    return (<Grid container direction="column" alignItems="center">
      <Grid item xs>{this.renderWorkoutControls()}</Grid>
      <Grid item xs>{this.renderExerciseControls()}</Grid>
    </Grid>)
  }

  renderWorkoutControls = () => {
    const { workoutName, date, workoutId, exercises } = this.props.workoutCreator;
    const { id, name, weight, reps, sets, distance, time } = this.state.currentExercise;
    const dateControl = (<Grid item xs>
      <TextField
        label="Workout Date"
        type="date"
        value={date}
        fullWidth
        onChange={(e) => this.handleWorkoutDataChange(e, "date")}
        onBlur={(e) => this.handleWorkoutDataSave()}
      />
    </Grid>);
    const nameControl = (<Grid item xs>
      <TextField
        label="Workout Name"
        value={workoutName}
        fullWidth
        onChange={(e) => this.handleWorkoutDataChange(e, "workoutName")}
        onBlur={(e) => this.handleWorkoutDataSave()}
      />
    </Grid>);
    return (<Grid container>
      {dateControl}
      {nameControl}
    </Grid>);
  }

  renderExerciseControls = () => {
    const { workoutName, date, workoutId, exercises } = this.props.workoutCreator;
    const { id, name, weight, reps, sets, distance, time } = this.state.currentExercise;
    const exerciseEditor = (<ExerciseEditorComponent
      id={id}
      name={name}
      weight={weight}
      reps={reps}
      sets={sets}
      distance={distance}
      time={time}
      onChange={this.handleExerciseDataChange.bind(this)}
    />);
    const buttonLeftDisabled = this.state.activeIndex <= 0;
    const buttonRightDisabled = this.state.activeIndex > exercises.length || !this.isValidExercise();
    return (<Grid container direction="column" alignItems="center">
      <Grid item xs>
        {exerciseEditor}
      </Grid>
      <Grid item xs>
        <Grid container>
          <Grid item xs>
            <Button
              disabled={buttonLeftDisabled}
              onClick={this.handleBackButton.bind(this)}>
              <KeyboardArrowLeft />
              Prev
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              onClick={this.handleDoneButton.bind(this)}>
              Done
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              disabled={buttonRightDisabled}
              onClick={this.handleNextButton.bind(this)}>
              Next
              <KeyboardArrowRight />
            </Button>
          </Grid>
        </Grid>
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