import React, { Component } from 'react';
import { Layout, NavDrawer, Panel, Sidebar, AppBar } from 'react-toolbox';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

export default class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        drawerActive: false,
        drawerPinned: false
    };
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
    this.toggleDrawerPinned = this.toggleDrawerPinned.bind(this);
  }

  toggleDrawerActive() {
        this.setState({ drawerActive: !this.state.drawerActive });
    }

    toggleDrawerPinned() {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    }

  render() {
    return (
      <Layout>

        <NavDrawer 
          active={this.state.drawerActive}
          pinned={this.state.drawerPinned} 
          permanentAt='xl'
          onOverlayClick={ this.toggleDrawerActive }>
          <List selectable ripple>
            <ListItem onClick={ this.toggleDrawerActive } caption='Home' to='/' />
            <ListItem onClick={ this.toggleDrawerActive } caption='About' to='/about' />
            <ListItem onClick={ this.toggleDrawerActive } caption='Settings' to='/settings' />
          </List>
        </NavDrawer>
        <Panel>
          <AppBar
            title='Workout Witness'
            onLeftIconClick={ this.toggleDrawerActive }
            leftIcon="menu"
          />
          {this.props.children}
        </Panel>
      </Layout>
    );
  }
}