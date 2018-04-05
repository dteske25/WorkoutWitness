import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInUser } from '../actions/userActions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        const { dispatch } = this.props;
        dispatch(logInUser(this.username.value, this.password.value));
    }

    render() {
        return (<div className={'row justify-content-center'}>
            <div className={'card'}>
                <h2 className={'card-title text-center'}>Login</h2>
                <div className={'card-body'}>
                    <div className={'row form-group'}>
                        <input ref={(input) => { this.username = input; }} className={'form-control'} placeholder='Username' />
                    </div>
                    <div className={'row form-group'}>
                        <input ref={(input) => { this.password = input; }} className={'form-control'} type='password' placeholder='Password' />
                    </div>
                    <div className={'row justify-content-between'}>
                        <Link to={'/register'} className={'btn btn-light'}>Register</Link>
                        <button onClick={this.handleLogin} className={'btn btn-primary'}>Login</button>
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
)(Login))