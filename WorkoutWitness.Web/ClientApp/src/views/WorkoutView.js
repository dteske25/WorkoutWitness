import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import mapDispatchToProps from '../actions';
import ExerciseCard from '../components/ExerciseCard';

export class WorkoutView extends Component {
  componentWillMount() {
    const { match, workoutActions } = this.props;
    workoutActions.LoadExercisesForWorkout(match.params.id);
  }

  render() {
    const { exercises } = this.props.workoutView;
    const renderedExercises = exercises.map(e => {
      return (<ExerciseCard exercise={e} key={e.id}/>);
    })
    return <div>{renderedExercises}</div>;
  }
}

function mapStateToProps(state) {
  return {
    workoutView: state.workoutView
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutView));