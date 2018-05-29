import React, { Component } from 'react';

import { Card, CardActions, CardContent, CardHeader, Button, Typography, TextField } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import './index.css';

export default class ExerciseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  handleIsEditing(value) {
    this.setState({ editing: value });
  }

  render() {
    const { exercise } = this.props;

    return (
      <Card className={"exercise-card"}>
        <CardHeader title={exercise.name} />
        {this.renderCardContent(exercise)}
        {this.renderCardActions()}
      </Card>
    );
  }

  renderCardActions() {
    if (this.state.editing) {
      return (<CardActions style={{ justifyContent: 'space-between' }}>
        <Button color="primary" onClick={() => this.handleIsEditing(false)}>Done</Button>
      </CardActions>);
    } else {
      return (<CardActions style={{ justifyContent: 'space-between' }}>
        <Button color="primary" onClick={() => this.handleIsEditing(true)}>Edit</Button>
        <Button color="primary">Delete</Button>
      </CardActions>);
    }
  }

  renderCardContent(exercise) {

    let weight = '', reps = '', sets = '', distance = '', time = '';

    if (this.state.editing) {
      weight = (<TextField label={'Weight'} margin="normal" />);
      reps = (<TextField label={'Reps'} margin="normal" />);
      sets = (<TextField label={'Sets'} margin="normal" />);
      distance = (<TextField label={'Distance'} margin="normal" />);
      time = (<TextField label={'Time'} margin="normal" />);
    } else {
      if (exercise.weight) {
        weight = (<p>Weight: {exercise.weight}</p>);
      }
      if (exercise.reps) {
        reps = (<p>Reps: {exercise.reps}</p>);
      }
      if (exercise.sets) {
        sets = (<p>Sets: {exercise.sets}</p>);
      }
      if (exercise.distance) {
        distance = (<p>Distance: {exercise.distance}</p>);
      }
      if (exercise.time) {
        time = (<p>Time: {exercise.time}</p>);
      }
    }

    return (<CardContent>
      {weight}
      {reps}
      {sets}
      {distance}
      {time}
    </CardContent>);
  }
}