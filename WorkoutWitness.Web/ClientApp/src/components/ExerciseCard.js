import React, { Component } from 'react';

import { Card, CardActions, CardContent, CardHeader, Button, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import './ExerciseCard.css';

export default class ExerciseCard extends Component {
  render() {
    const { exercise } = this.props;

    return (
      <Card className={"exercise-card"}>
        <CardHeader title={exercise.name}/>
          {this.renderCardContent(exercise)}
        <CardActions style={{ justifyContent: 'space-between'}}>
          <Button color="primary">Edit</Button>
          <Button color="primary">Delete</Button>
        </CardActions>
      </Card>
    );
  }

  renderCardContent(exercise) {
    const { weight, reps, sets, distance, time } = exercise;

    return (<CardContent>
      {weight} <br/>
      {reps} <br/>
      {sets} <br/>
      {distance} <br/>
      {time}
    </CardContent>);
  }
}