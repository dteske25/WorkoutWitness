import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import { loadWorkouts, deleteWorkout } from '../actions/fetch';
import * as WorkoutActions from '../actions/workoutActions';
import * as ExerciseActions from '../actions/exerciseActions';
import WorkoutCard from './shared/WorkoutCard';

class Workouts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(loadWorkouts());
    }

    onDeleteWorkout(id) {
        const { dispatch } = this.props;
        dispatch(deleteWorkout(id));
    }

    render() {
        const { workouts } = this.props;
        let renderedWorkouts = [];
        if (workouts) {
            renderedWorkouts = workouts.map(w => {
                return <WorkoutCard key={w.id} workout={w} deleteFunction={this.onDeleteWorkout.bind(this, w.id)}/>
            });
        }
        return (<div className={'row'}>
            {renderedWorkouts}
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        workouts: state.index.workouts,
        exercises: state.index.exercises,
        workoutCreator: state.index.workoutCreator,
    }
};

export default withRouter(connect(
    mapStateToProps
)(Workouts))
