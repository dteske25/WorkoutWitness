import React, { Component } from 'react';
import {
  TextField,
  Grid,
} from '@material-ui/core';

export default class ExerciseEditorComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, weight, reps, sets, distance, time, onChange, onBlur } = this.props;
    return (<Grid container>
      <Grid item xs={12}>
        <TextField
          label="Name"
          value={this.props.name || ''}
          onChange={(e) => onChange(e, 'name')}
          onBlur={onBlur}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Weight"
          value={this.props.weight || ''}
          onChange={(e) => onChange(e, "weight")}
          onBlur={onBlur}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Reps"
          value={this.props.reps || ''}
          onChange={(e) => onChange(e, "reps")}
          onBlur={onBlur}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Sets"
          value={this.props.sets || ''}
          onChange={(e) => onChange(e, "sets")}
          onBlur={onBlur}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Distance"
          value={this.props.distance || ''}
          onChange={(e) => onChange(e, "distance")}
          onBlur={onBlur}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Time"
          value={this.props.time || ''}
          onChange={(e) => onChange(e, "time")}
          onBlur={onBlur}
          fullWidth
        />
      </Grid>
    </Grid>);
  }
}