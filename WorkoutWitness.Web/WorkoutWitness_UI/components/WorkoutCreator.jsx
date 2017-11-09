import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { postNewWorkout, postExercise } from '../actions/fetch';
import * as WorkoutActions from '../actions/workoutActions';
import * as ExerciseActions from '../actions/exerciseActions';
import * as WorkoutCreatorActions from '../actions/workoutCreatorActions';
import ValuePicker from './shared/ValuePicker';

import './WorkoutCreator.scss';

class WorkoutCreator extends React.Component {
    constructor(props) {
        super(props);
    }

    handleBack() {
        const { dispatch, workoutCreator } = this.props;
        if (workoutCreator.currentExercise.name) {
            dispatch(postExercise(workoutCreator.workoutId, workoutCreator.currentExercise));
        }
        dispatch(WorkoutCreatorActions.PrevExercise());
    }

    handleNext() {
        const { dispatch, workoutCreator } = this.props;
        if (workoutCreator.currentExercise.name) {
            dispatch(postExercise(workoutCreator.workoutId, workoutCreator.currentExercise));
            dispatch(WorkoutCreatorActions.NextExercise());
        }
    }

    handleDone() {
        const { dispatch, workoutCreator, history } = this.props;
        if (workoutCreator.currentExercise.name) {
            dispatch(postExercise(workoutCreator.workoutId, workoutCreator.currentExercise));
        }
        history.push('/');

    }

    handleExerciseNameInput(e) {
        const { dispatch } = this.props;
        dispatch(WorkoutCreatorActions.CurrentExerciseValueChange('name', e.currentTarget.value));
    }

    handleWorkoutNameInput(e) {
        const { dispatch } = this.props;
        dispatch(WorkoutCreatorActions.WorkoutNameChange(e.currentTarget.value));
    }

    handleWorkoutNameBlur() {
        const { dispatch, workoutCreator } = this.props;
        dispatch(postNewWorkout(workoutCreator.workoutName, workoutCreator.workoutId ? workoutCreator.workoutId : ''));
    }

    handleValuePicker(label, value) {
        const { dispatch } = this.props;
        const formattedValue = value ? Number(value) : '';
        dispatch(WorkoutCreatorActions.CurrentExerciseValueChange(label, formattedValue));
    }


    renderWorkoutNameInput() {
        const { workoutName } = this.props.workoutCreator;
        return (<input
            className={'workout-creator__workout-input text-center'}
            type='text'
            placeholder='Workout Name'
            onInput={this.handleWorkoutNameInput.bind(this)}
            onBlur={this.handleWorkoutNameBlur.bind(this)}
            value={workoutName} />);
    }

    renderExerciseNameInput() {
        const { currentExercise } = this.props.workoutCreator;
        return (<input
            className={'workout-creator__exercise-input text-center'}
            type='text'
            placeholder='Exercise Name'
            onInput={this.handleExerciseNameInput.bind(this)}
            value={currentExercise.name} />);
    }


    renderExerciseInputs() {
        const { currentExercise } = this.props.workoutCreator;
        return (<div>
            <ValuePicker
                className={'workout-creator__value-picker'}
                onChangeFunction={this.handleValuePicker.bind(this)}
                incrementBy={5}
                label={'Weight'}
                value={currentExercise.weight ? currentExercise.weight : '' }
            />
            <ValuePicker
                className={'workout-creator__value-picker'}
                onChangeFunction={this.handleValuePicker.bind(this)}
                incrementBy={1}
                label={'Reps'}
                value={currentExercise.reps ? currentExercise.reps : '' }
            />
            <ValuePicker
                className={'workout-creator__value-picker'}
                onChangeFunction={this.handleValuePicker.bind(this)}
                incrementBy={1}
                label={'Sets'}
                value={currentExercise.sets ? currentExercise.sets : '' }
            />
        </div>);
    }

    renderNavigationButtons() {
        return (<div className={'workout-creator__navigation'}>
            <button
                className={'red'}
                onClick={this.handleBack.bind(this)}
            >
                Previous Exercise
                </button>
            <button
                className={'green'}
                onClick={this.handleNext.bind(this)}
            >
                Next Exercise
                </button>
            <button
                className={'blue'}
                onClick={this.handleDone.bind(this)}
            >
                Done
                </button>
        </div>);
    }

    render() {
        const { workoutName, currentExercise, exercises } = this.props.workoutCreator;
        const renderedWorkoutNameInput = this.renderWorkoutNameInput();
        let renderedExerciseNameInput = '';
        if (workoutName) {
            renderedExerciseNameInput = this.renderExerciseNameInput();
        }
        let renderedExerciseInputs = '';
        let renderedNavigationButtons = this.renderNavigationButtons();
        if (currentExercise.name) {
            renderedExerciseInputs = this.renderExerciseInputs();
        }


        return (<div>
            {renderedWorkoutNameInput}
            {renderedExerciseNameInput}
            {renderedExerciseInputs}
            <p>{`Exercises Added: ${exercises.length}`}</p>
            {renderedNavigationButtons}
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        workouts: state.index.workouts,
        exercises: state.index.exercises,
        workoutCreator: state.index.workoutCreator
    }
};

export default withRouter(connect(
    mapStateToProps
)(WorkoutCreator))