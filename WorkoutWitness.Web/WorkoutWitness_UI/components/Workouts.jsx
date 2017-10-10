import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, dispatch } from 'redux';
import { loadWorkouts } from '../actions/fetch';
import * as WorkoutActions from '../actions/workoutActions';
import WorkoutCard from './shared/WorkoutCard';

class Workouts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        
    }

    handleOnClick() {
        const { dispatch } = this.props;
        dispatch(loadWorkouts());
    }

    render() {
        console.log({ 'props': this.props });
        const { workouts } = this.props;
        let renderedWorkouts = [];
        if (workouts){
            renderedWorkouts = workouts.map(w => {
                return <WorkoutCard name={w.name} />
            });
        }
        return (<div>
            <h1>Workouts</h1>
            {renderedWorkouts}
            <button onClick={this.handleOnClick.bind(this)}>Dispatch Fetch</button>
        </div>);
    }
}

const mapStateToProps = (state, routerProps) => {
    let id = '';
    if (routerProps && routerProps.match.params && routerProps.match.params.id){
        id = routerProps.match.params.id;
    }
    return {
        workouts: state.index.workouts,
        selectedWorkout: id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            workout: bindActionCreators(WorkoutActions, dispatch),
        },
        dispatch,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Workouts);
