import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import mapDispatchToProps from '../actions';


export class ProfileView extends Component {
    render() {
        return <div>ProfileView</div>;
    }
}

function mapStateToProps(state) {
    return {

    };
  }
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileView));