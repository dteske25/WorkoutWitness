import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as fetch from '../actions/fetch';
import WorkoutCard from './shared/WorkoutCard';

class Workouts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props);
        this.props.fetchWorkouts();
    }

    render() {
        const { workouts } = this.props;
        const renderedWorkouts = workouts.map(w => {
            return <WorkoutCard name={w.name} />
        });


        return (<div>
            <h1>Workouts</h1>
            {renderedWorkouts}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        workouts: state.workouts,
        selectedWorkout: state.selectedWorkout
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchWorkouts: () => fetch.fetchWorkouts(dispatch)
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Workouts);
