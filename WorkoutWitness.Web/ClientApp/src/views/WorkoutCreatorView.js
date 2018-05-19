import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class WorkoutCreatorView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            date: new Date()
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (<div>
            WorkoutCreatorView
            <TextField
                id="name"
                label="Workout Name"
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                required
            />
        </div>);
    }
}