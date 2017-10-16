import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { postNewWorkout } from '../actions/fetch';
import * as WorkoutActions from '../actions/workoutActions';
import * as ExerciseActions from '../actions/exerciseActions';
import ValuePicker from './shared/ValuePicker';

import './WorkoutCreator.scss';

class WorkoutCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'workoutName': '',
            'exercises': [],
            'currentExerciseName': ''
        };
    }

    handleBack() {
        const { exercises } = this.state;
        const lastOne = exercises.pop();
        this.weightValue.setValue(lastOne.weight);
        this.repsValue.setValue(lastOne.reps);
        this.setsValue.setValue(lastOne.sets);
        this.setState({
            'exercises': exercises,
            'currentExerciseName': lastOne.name
        });
    }

    handleNext() {
        const { exercises, currentExerciseName } = this.state;
        exercises.push({
            'name': currentExerciseName,
            'weight': this.weightValue.getValue(),
            'reps': this.repsValue.getValue(),
            'sets': this.setsValue.getValue(),
        });
        this.weightValue.clear();
        this.repsValue.clear();
        this.setsValue.clear();
        this.setState({
            'exercises': exercises,
            'currentExerciseName': ''
        });
    }

    handleDone() {
        const { workoutName, exercises } = this.state;
        const { dispatch, history } = this.props;
        dispatch(postNewWorkout(workoutName, exercises));
        history.push('/');
    }

    handleExerciseInput(e) {
        this.setState({ 'currentExerciseName': e.currentTarget.value });
    }

    handleWorkoutInput(e) {
        this.setState({ 'workoutName': e.currentTarget.value });
    }

    render() {
        const { exercises, workoutName, currentExerciseName } = this.state;
        return (<div>
            <input
                className={'workout-creator__workout-input text-center'}
                type='text'
                placeholder='Workout Name'
                onInput={this.handleWorkoutInput.bind(this)}
                value={workoutName} />
            <input
                className={'workout-creator__exercise-input text-center'}
                type='text'
                placeholder='Exercise Name'
                onInput={this.handleExerciseInput.bind(this)}
                value={currentExerciseName} />
            <ValuePicker
                className={'workout-creator__value-picker'}
                ref={(input) => this.weightValue = input}
                type={'number'}
                incrementBy={5}
                label={'Weight'} />
            <ValuePicker
                className={'workout-creator__value-picker'}
                ref={(input) => this.repsValue = input}
                type={'number'}
                incrementBy={1}
                label={'Reps'} />
            <ValuePicker
                className={'workout-creator__value-picker'}
                ref={(input) => this.setsValue = input}
                type={'number'}
                incrementBy={1}
                label={'Sets'} />
            <p>{`Exercises: ${exercises.length}`}</p>
            <div className={'workout-creator__navigation'}>
                <button
                    className={'red'}
                    onClick={this.handleBack.bind(this)}
                >
                    Last Exercise
                </button>
                <button
                    className={'green'}
                    onClick={this.handleNext.bind(this)}
                >
                    Add Exercise
                </button>
                <button
                    className={'blue'}
                    onClick={this.handleDone.bind(this)}
                >
                    Save Workout
                </button>
            </div>
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        workouts: state.index.workouts,
        exercises: state.index.exercises,
    }
};

export default withRouter(connect(
    mapStateToProps
)(WorkoutCreator))