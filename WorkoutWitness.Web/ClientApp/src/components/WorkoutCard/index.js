import React, { Component } from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';

export default class WorkoutCard extends Component {
  render() {
    return (<Card>
      <CardContent>
        {this.props.name}
      </CardContent>
      <CardContent>
        {this.props.date}
      </CardContent>
      <CardActions>
        <Button onClick={this.props.onClick}>View</Button>
      </CardActions>
    </Card>);
  }
}