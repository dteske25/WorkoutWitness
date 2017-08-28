import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import TimePicker from 'react-toolbox/lib/time_picker';
import { modifyExercise } from '../actions/workout';

export default class AddWorkoutFormEntry extends Component {
    constructor(props) {
      super(props);
    }

    handleChange(name, value) {
        const { dispatch, id } = this.props;
        dispatch(modifyExercise(id, name, value));
    }

    render() {
        const { id, currType, currName, currWeight, currSets, currReps, currDistance, currTime } = this.props;
        const exerciseName = (
            <Input
                className={'entry_exerciseName'}
                value={currName}
                type='text'
                label='Exercise Name'
                onChange={this.handleChange.bind(this, 'name')} />
        );
        const weight = (
            <Input
                className={'entry_weight'}
                value={currWeight}
                type='number'
                label='Weight'
                onChange={this.handleChange.bind(this, 'weight')} />
        );
        const sets = (
            <Input
                className={'entry_sets'}
                value={currSets}
                type='number'
                label='Sets'
                onChange={this.handleChange.bind(this, 'sets')} />
        );
        const reps = (
            <Input
                className={'entry_reps'}
                value={currReps}
                type='number'
                label='Repetitions'
                onChange={this.handleChange.bind(this, 'reps')} />
        );
        const distance = (
            <Input
                className={'entry_distance'}
                value={currDistance}
                type='number'
                label='Distance'
                onChange={this.handleChange.bind(this, 'distance')} />
        );
        const time = (
            <TimePicker
                className={'entry_time'}
                value={currTime}
                label='Time'
                onChange={this.handleChange.bind(this, 'time')} />
        );

        switch (currType) {
          case 'weightlifting':
            return (
              <span className={'entry_row'} key={'entry-' + id}>
                {exerciseName}
                {weight}
                {reps}
                {sets}
              </span>
            );
          case 'running':
            return (
              <span className={'entry_row'} key={'entry-' + id}>
                {exerciseName}
                {distance}
                {time}
              </span>
            );
          case 'swimming':
            return (
              <span className={'entry_row'} key={'entry-' + id}>
                {exerciseName}
                {sets}
                {distance}
                {time}
              </span>
            );
          case 'custom':
            return (
              <span className={'entry_row'} key={'entry-' + id}>
                {exerciseName}
                {weight}
                {reps}
                {sets}
                {distance}
                {time}
              </span>
            );
          default:
            return (<span key={'entry-' + id}>Unknown</span>);
        }
    }
}