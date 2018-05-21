import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import mapDispatchToProps from '../actions';
import TextField from '@material-ui/core/TextField';

export class WorkoutCreatorView extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const month = `${today.getMonth() + 1}`;
        this.state = {
            name: '',
            date: `${today.getFullYear()}-${month.padStart(2, '0')}-${today.getDate()}`
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { name, date } = this.state;


        return (<div>
            WorkoutCreatorView
            <br />
            <TextField
                label="Workout Name"
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                required
            />
            <TextField
                label="Workout Date"
                type="date"
                required
                value={this.state.date}
                onChange={this.handleChange("date")}
            />
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
)(WorkoutCreatorView));