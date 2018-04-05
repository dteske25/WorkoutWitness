import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'username': '',
            'firstName': '',
            'lastName': '',
            'email': '',
            'password': '',
        }
    }

    componentWillMount() {
        const { dispatch, match } = this.props;
    }

    handleValueChange(e, key) {
        this.setState({ [key]: e.target.value });
    }

    handleSubmit() {
        const { dispatch } = this.props;
        const { username, firstName, lastName, email, password } = this.state;
        dispatch(createUser(username, email, firstName, lastName, password));
    }

    render() {
        return (<div className={'row justify-content-center'}>
            <div className={'card col-4'}>
                <h2 className={'card-title text-center'}>Register</h2>
                <div className={'card-body'}>
                    <div className={'row form-group'}>
                        <input
                            className={'form-control'}
                            onChange={(e) => this.handleValueChange(e, 'username')}
                            value={this.state.username}
                            placeholder='Username' />
                    </div>
                    <div className={'row form-group'}>
                        <input
                            className={'form-control col-6'}
                            onChange={(e) => this.handleValueChange(e, 'firstName')}
                            value={this.state.firstName}
                            placeholder='First Name' />
                        <input
                            className={'form-control col-6'}
                            onChange={(e) => this.handleValueChange(e, 'lastName')}
                            value={this.state.lastName}
                            placeholder='Last Name' />
                    </div>
                    <div className={'row form-group'}>
                        <input
                            className={'form-control'}
                            onChange={(e) => this.handleValueChange(e, 'email')}
                            value={this.state.email}
                            placeholder='Email' />
                    </div>
                    <div className={'row form-group'}>
                        <input
                            className={'form-control'}
                            onChange={(e) => this.handleValueChange(e, 'password')}
                            value={this.state.password}
                            type='password'
                            placeholder='Password' />
                    </div>
                    <div className={'row justify-content-between'}>
                        <Link
                            to={'/login'}
                            className={'btn btn-light'}>
                            Back
                        </Link>
                        <button
                            onClick={() => this.handleSubmit()}
                            className={'btn btn-primary'}>
                            Register
                        </button>
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