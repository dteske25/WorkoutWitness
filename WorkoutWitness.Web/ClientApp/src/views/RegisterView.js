import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'
import mapDispatchToProps from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export class RegisterView extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = () => {
        const { firstName, lastName, username, email, password } = this.state;
        this.props.userActions.Register({firstName, lastName, username, emailAddress:email, password});
    }

    render() {
        const { firstName, lastName, username, email, password, confirmPassword } = this.state;
        const passwordsMatch = password === confirmPassword;
        const canSubmit = !!firstName && !!lastName && !!username & !!email && !!password & passwordsMatch;

        const { user } = this.props;
        if (user.id) {
            return <Redirect to={'/'} />;
        }

        return (<Grid container>
            <Grid item xs={12}>
                <TextField
                    id="firstName"
                    label="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="lastName"
                    label="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="email"
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="username"
                    label="Username"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    margin="normal"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    type="password"
                    margin="normal"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    error={!passwordsMatch}
                    id="confirm-password"
                    label="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange('confirmPassword')}
                    type="password"
                    margin="normal"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    disabled={!canSubmit}
                    onClick={this.handleSubmit}
                    variant="raised"
                    color="primary"
                    className={'button'}>
                    Register
                </Button>
            </Grid>
        </Grid>);
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
  }
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterView));