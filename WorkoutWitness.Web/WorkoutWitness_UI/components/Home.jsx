import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import Workout from './Workout';
import AddWorkoutForm from './AddWorkoutForm';

export default class Home extends Component {
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
        return (
            <div className={'page-content-wrapper'}>
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
                        handleSave={this.handleAddWorkout.bind(this)}
                        handleClose={this.toggleAddWorkout.bind(this)}
                    />
                </div>
            </div>
        );
    }
}