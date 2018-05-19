import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuList, MenuItem } from '@material-ui/core/Menu';
import { ListItemIcon, ListItemText } from '@material-ui/core/List';
import ViewListIcon from '@material-ui/icons/ViewList';
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export class Layout extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const drawer = (
            <MenuList>
                <NavLink exact to="/" onClick={this.handleDrawerToggle}>
                    <MenuItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Home" />
                    </MenuItem>
                </NavLink>
                <Divider />
                <NavLink to="/list" onClick={this.handleDrawerToggle}>
                    <MenuItem>
                        <ListItemIcon>
                            <ViewListIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Workouts" />
                    </MenuItem>
                </NavLink>
                <Divider />
                <NavLink to="/profile" onClick={this.handleDrawerToggle}>
                    <MenuItem>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Profile" />
                    </MenuItem>
                </NavLink>
                <Divider />
                <NavLink to="/login" onClick={this.handleDrawerToggle}>
                    <MenuItem>
                        <ListItemIcon>
                            <LockIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Login" />
                    </MenuItem>
                </NavLink>
            </MenuList>
        );

        return (
            <div className={'app'}>
                <AppBar className={'appBar'}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={'flex'}>
                            Workout Witness
                        </Typography>
                    </Toolbar>
                    
                </AppBar>
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={this.state.mobileOpen}
                    onClose={this.handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
                <div className={"content"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
