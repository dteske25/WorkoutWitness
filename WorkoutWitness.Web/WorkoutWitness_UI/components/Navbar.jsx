import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Drawer from 'react-toolbox/lib/drawer';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
  }

  componentWillMount(){
    console.log(this.props.location);
  }

  handleToggle() {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title='Workout Witness'
          onLeftIconClick={() => this.handleToggle()}
          leftIcon="menu"
        />
        <Drawer
          active={this.state.open}
          onOverlayClick={() => this.handleToggle()}
        >
          <List selectable ripple>
            <ListItem onClick={() => this.handleToggle()} caption='Home' to='/' />
            <ListItem onClick={() => this.handleToggle()} caption='About' to='/about' />
            <ListItem onClick={() => this.handleToggle()} caption='Settings' to='/settings' />
          </List>
        </Drawer>
      </div>
    );
  }
}