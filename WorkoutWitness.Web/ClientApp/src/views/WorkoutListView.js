import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { LoadWorkouts } from '../services/workoutService';

export default class WorkoutListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        };
    }

    componentWillMount() {
        LoadWorkouts().then(response => response.json()).then(data => console.log(data));
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