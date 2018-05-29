import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import mapDispatchToProps from '../actions';
import WorkoutCard from '../components/WorkoutCard';
import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export class WorkoutListView extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { workoutActions } = this.props;
        workoutActions.LoadWorkouts();
    }

    handleWorkoutCardAction(id) {
        const { history } = this.props;
        history.push(`/list/${id}`);
    }

    render() {
        const renderedWorkouts = this.props.workouts.list.map(w => {
            return (<Grid key={w.id} item xs={3}><WorkoutCard key={w.id} name={w.name} date={w.date} onClick={this.handleWorkoutCardAction.bind(this, w.id)}/></Grid>);
        })
        return (<Grid container spacing={16}>

            {renderedWorkouts}
            <Link to={'/create'}>
                <Button variant="fab" color="primary" aria-label="add">
                    <AddIcon />
                </Button>
            </Link>
        </Grid>);
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