// Import libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';
// Import Actions
import * as WorkoutActions from '../actions/workout';
// Import Components
import Workout from './Workout';
import AddWorkoutForm from './AddWorkoutForm';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            addWorkoutVisible: false,
        };
    }

    handleAddWorkout(data){
        console.log({data});
        this.setState({addWorkoutVisible: !this.state.addWorkoutVisible});
    }

    toggleAddWorkout(){
        this.setState({addWorkoutVisible: !this.state.addWorkoutVisible});
    }

    render() {
        const { dispatch, createWorkout } = this.props;
        return (
            <div>
                <Workout/>
                <div
                    className={'addButton'}>
                    <Button
                        icon='add'
                        floating
                        onMouseUp={this.toggleAddWorkout.bind(this)}
                    />
                    <AddWorkoutForm
                        active={this.state.addWorkoutVisible}
                        dispatch={dispatch}
                        handleSave={this.handleAddWorkout.bind(this)}
                        handleClose={this.toggleAddWorkout.bind(this)}
                        createWorkout={createWorkout}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        workouts: state.workouts,
        createWorkout: state.createWorkout,
        user: state.user,
    };
}
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: {
//             data: bindActionCreators(DataActions, dispatch),
//             compareCommunity: bindActionCreators(CompareCommunityActions, dispatch),
//             featuredInitiative: bindActionCreators(FeaturedInitiativeActions, dispatch),
//             nationalSnapshot: bindActionCreators(NationalSnapshotActions, dispatch),
//             sideBySide: bindActionCreators(SideBySideActions, dispatch),
//         },
//         dispatch,
//     };
// }
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            workouts: bindActionCreators(WorkoutActions, dispatch),
        },
        dispatch,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);