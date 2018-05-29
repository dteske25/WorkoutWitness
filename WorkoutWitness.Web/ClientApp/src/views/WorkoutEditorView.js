import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapDispatchToProps from '../actions';
import ExerciseEditorComponent from '../components/ExerciseEditorComponent';
import { TextField, Grid, Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
export class WorkoutEditorView extends Component {
  render() {
    const { workoutName, date, workoutId, exercises, activeIndex } = this.props.workoutCreator;
    const dateControl = (<Grid item xs={2}>
      <TextField
        label="Workout Date"
        type="date"
        value={date}
        fullWidth
      />
    </Grid>);
    const nameControl = (<Grid item xs={2}>
      <TextField
        label="Workout Name"
        value={workoutName}
        fullWidth
      />
    </Grid>);
    let exerciseEditor = null;
    if (exercises[activeIndex]) {
      const currentExercise = exercises[activeIndex];
      exerciseEditor = (<ExerciseEditorComponent
        id={currentExercise.id}
        name={currentExercise.name}
        weight={currentExercise.weight}
        reps={currentExercise.reps}
        sets={currentExercise.sets}
        distance={currentExercise.distance}
        time={currentExercise.time}
      />);
    } else {
      exerciseEditor = <ExerciseEditorComponent />
    }
    const buttonLeftDisabled = activeIndex === 0;
    const buttonRightDisabled = activeIndex === exercises.length;

    return (<Grid container>
      {dateControl}
      {nameControl}
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={2}>
            <Button disabled={buttonLeftDisabled}><KeyboardArrowLeft />Prev</Button>
          </Grid>
          <Grid item xs={8}>
            {exerciseEditor}
          </Grid>
          <Grid item xs={2}>
            <Button disabled={buttonRightDisabled}>Next<KeyboardArrowRight/></Button>
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
)(WorkoutEditorView));