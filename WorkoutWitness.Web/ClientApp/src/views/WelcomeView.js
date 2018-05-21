import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import mapDispatchToProps from '../actions';

class WelcomeView extends Component {
  render() {
    const { user } = this.props;
    const text = user.firstName ? `Hello, ${user.firstName}!` : "Welcome to Workout Witness!";
    return (<div>
      <p>{text}</p>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeView));