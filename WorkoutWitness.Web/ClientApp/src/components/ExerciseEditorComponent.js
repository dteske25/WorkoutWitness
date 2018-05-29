import React, { Component } from 'react';
import {
  TextField,
  Grid,
} from '@material-ui/core';

export default class ExerciseEditorComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, name) => {
    const { onChange, id } = this.props;
    if (id) {
      onChange(event, name, id);
    } else {
      onChange(event, name);
    }
  }

  render() {
    const { name, weight, reps, sets, distance, time, onChange } = this.props;
    return (<Grid container>
      <Grid item xs={12}>
        <TextField
          label="Name"
          value={this.props.name || ''}
          onChange={(e) => this.handleChange(e, "name")}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Weight"
          value={this.props.weight || ''}
          onChange={(e) => this.handleChange(e, "weight")}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Reps"
          value={this.props.reps || ''}
          onChange={(e) => this.handleChange(e, "reps")}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Sets"
          value={this.props.sets || ''}
          onChange={(e) => this.handleChange(e, "sets")}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Distance"
          value={this.props.distance || ''}
          onChange={(e) => this.handleChange(e, "distance")}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Time"
          value={this.props.time || ''}
          onChange={(e) => this.handleChange(e, "time")}
          fullWidth
        />
      </Grid>
    </Grid>);
  }
}