import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Register extends React.Component {
    componentWillMount() {
        const { dispatch, match } = this.props;
    }

    render() {
        return (<div className={'row justify-content-center'}>
            <div className={'card col-4'}>
            <h2 className={'card-title text-center'}>Register</h2>
            <div className={'card-body'}>
                <div className={'row form-group'}>
                    <input className={'form-control'} placeholder='Username' />
                </div>
                <div className={'row form-group'}>
                    <input className={'form-control col-6'} placeholder='First Name' />
                    <input className={'form-control col-6'} placeholder='Last Name' />
                </div>
                <div className={'row form-group'}>
                    <input className={'form-control'} placeholder='Email' />
                </div>
                <div className={'row form-group'}>
                    <input className={'form-control'} type='password' placeholder='Password' />
                </div>
                <div className={'row justify-content-between'}>
                    <Link to={'/login'} className={'btn btn-light'}>Back</Link>
                    <button className={'btn btn-primary'}>Register</button>
                </div>
            </div>
        </div>
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.index.user,
        workouts: state.index.workouts,
        exercises: state.index.exercises,
        workoutCreator: state.index.workoutCreator
    }
};

export default withRouter(connect(
    mapStateToProps
)(Register))