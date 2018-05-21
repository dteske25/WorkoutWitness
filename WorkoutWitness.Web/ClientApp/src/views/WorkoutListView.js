import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import mapDispatchToProps from '../actions';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export class WorkoutListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        };
    }

    componentWillMount() {
        const { workoutActions } = this.props;
        workoutActions.LoadWorkouts();
    }

    render() {
        return (<div>
            WorkoutListView
            <Link to={'/create'}>
                <Button variant="fab" color="primary" aria-label="add">
                    <AddIcon />
                </Button>
            </Link>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
      workouts: state.workouts
    };
  }
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(WorkoutListView));