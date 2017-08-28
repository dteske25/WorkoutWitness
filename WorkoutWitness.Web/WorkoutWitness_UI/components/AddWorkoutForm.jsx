import React, { Component } from 'react';
import { createNewWorkout, addExercise, removeExercise, modifyWorkoutName, modifyWorkoutDate } from '../actions/workout';
import Dropdown from 'react-toolbox/lib/dropdown';
import DatePicker from 'react-toolbox/lib/date_picker';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';
import Button from 'react-toolbox/lib/button';
import AddWorkoutFormEntry from './AddWorkoutFormEntry';

import './AddWorkoutForm.scss';

const exerciseTypes = [
  {
    "value": 'custom',
    "label": "Custom"
  },
  {
    "value": 'weightlifting',
    "label": "Weightlifting"
  },
  {
    "value": 'running',
    "label": "Running"
  },
  {
    "value": 'swimming',
    "label": "Swimming"
  }
];

export default class AddWorkoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            currentType: 'custom',
        };
    }

    handleNameChange(value) {
        const { dispatch } = this.props;
        dispatch(modifyWorkoutName(value));
    }

    handleDateChange(value) {
        const { dispatch } = this.props;
        dispatch(modifyWorkoutDate(value));
    }


    handleDropdown(value) {
        this.setState({...this.state, currentType: value});
    }

    handleAddExercise() {
        const { currentType } = this.state;
        const { dispatch } = this.props;
        dispatch(addExercise(currentType));
    }

    handleRemoveExercise(id) {
        const { dispatch } = this.props;
        dispatch(removeExercise(id));
    }

    render() {
        const { handleSave, handleClose, active, dispatch, createWorkout } = this.props;
        const actions = [
            { label: "Cancel", onClick: () => {
                    handleClose();
                }
            },
            { label: "Save", onClick: () => {
                    dispatch(createNewWorkout(createWorkout));
                    console.log(createWorkout);
                    handleClose();                  
                }
            }
        ];
        const exercises = createWorkout.exercises.map((exercise) => {
            return (
                <div 
                    className={'workout-form-exercise'} 
                    key={'row-' + exercise.id} >
                    <AddWorkoutFormEntry 
                        key={exercise.id} 
                        id={exercise.id}
                        className={'workout-form-exercise-entry'} 
                        currType={exercise.type} 
                        currName={exercise.name}
                        currWeight={exercise.weight}
                        currSets={exercise.sets}
                        currReps={exercise.reps}
                        currDistance={exercise.distance}
                        currTime={exercise.time} 
                        dispatch={dispatch} />
                    <Button 
                        className={'workout-form-exercise-remove'}
                        icon='close'
                        label='Delete Exercise'
                        flat 
                        primary
                        onMouseUp={this.handleRemoveExercise.bind(this, exercise.id)} />
                    
                </div>
            );
        })

        return(
            <Dialog
                title='Add Workout'
                actions={actions}
                active={active}
                onEscKeyDown={handleClose}
                onOverlayClick={handleClose} >
                <form> 
                    <Input
                        type='text'
                        label='Workout Name'
                        value={createWorkout.workoutName}
                        onChange={this.handleNameChange.bind(this)} />
                    <DatePicker
                        label='Date'
                        autoOk
                        inputFormat={(value) => `${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`}
                        onChange={this.handleDateChange.bind(this)}
                        value={createWorkout.date}
                        sundayFirstDayOfWeek />
                    {exercises}
                    <div className={'add-exercise'}>
                        <Dropdown
                            auto
                            className={'add-exercise-dropdown'}
                            onChange={this.handleDropdown.bind(this)}
                            source={exerciseTypes}
                            value={this.state.currentType}
                            label='Exercise Type' />
                        <Button 
                            className={'add-exercise-button'}
                            icon='add' 
                            label='Add Exercise' 
                            flat 
                            primary 
                            onMouseUp={this.handleAddExercise.bind(this)} />
                    </div>
                </form>
            </Dialog>
        );
    }
}