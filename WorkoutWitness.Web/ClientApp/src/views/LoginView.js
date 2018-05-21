import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'
import mapDispatchToProps from '../actions';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';

import './LoginView.css';

export class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleSubmit = () => {
        const { username, password } = this.state;
        this.props.userActions.Login({username, password});
    }

    render() {
        const { user } = this.props;
        if (user.id) {
            return <Redirect to={'/'} />;
        }

        return (<Grid container className={'login-form'}>
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
                <FormControl className={"passwordField"}>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    onMouseDown={this.handleMouseDownPassword}
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <Button
                    onClick={this.handleSubmit}
                    variant="raised"
                    color="primary"
                    className={'button'}>
                    Login
                    <LockIcon className={"lock-icon"} />
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Link to={'/register'}>
                    <Button variant="raised" color="secondary" className={'button'}>
                        Create Account
                    </Button>
                </Link>
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
  )(LoginView));