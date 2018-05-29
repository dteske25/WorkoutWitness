import React, { Component } from 'react';

import { Card, CardActions, CardContent, CardHeader, Button, Typography, TextField } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import './index.css';

export default class ExerciseCard extends Component {
  constructor(props) {
    super(props);
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
      return (<CardActions style={{ justifyContent: 'space-between' }}>
        <Button color="primary">Edit</Button>
        <Button color="primary">Delete</Button>
      </CardActions>);
  }

  renderCardContent(exercise) {

    let weight = '', reps = '', sets = '', distance = '', time = '';
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

    return (<CardContent>
      {weight}
      {reps}
      {sets}
      {distance}
      {time}
    </CardContent>);
  }
}