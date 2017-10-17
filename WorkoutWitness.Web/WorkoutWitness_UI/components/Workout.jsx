import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { loadExercisesForWorkoutId } from '../actions/fetch';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ExerciseCard from './shared/ExerciseCard';

class Workout extends React.Component {
    componentWillMount() {
        const { dispatch, match } = this.props;
        dispatch(loadExercisesForWorkoutId(match.params.id));
    }

    render() {
        const { exercises } = this.props;

        let renderedExercises = [];
        if (exercises) {
            renderedExercises = exercises.map(e => {
                return <ExerciseCard key={e.id} exercise={e} />
            });
        }

        return (<div>
            <div className={'row'}>
                <Link
                    to={'/'}
                    className={'btn btn-primary'}
                >
                    Back
                </Link>
            </div>
            <div className={'row'}>
                {renderedExercises}
            </div>
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
)(Workout))