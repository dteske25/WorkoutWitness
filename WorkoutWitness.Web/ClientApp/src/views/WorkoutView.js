import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import mapDispatchToProps from '../actions';

export class WorkoutView extends Component {
    render() {
        return <div>WorkoutView</div>;
    }
}

function mapStateToProps(state) {
    return {
      // stuffs: state.stuffs
    };
  }
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(WorkoutView));