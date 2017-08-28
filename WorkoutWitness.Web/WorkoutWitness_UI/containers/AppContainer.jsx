import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Layout, NavDrawer, Panel, Sidebar, AppBar } from 'react-toolbox';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import configureStore from '../reducers/configureStore'; 
import Home from "../components/Home";
import About from "../components/About";
import Settings from "../components/Settings";

const store = configureStore();

export default class AppContainer extends Component {
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
    const home = <Link to="/">Home</Link>;
    const about = <Link to="about">About</Link>;
    const settings = <Link to="settings">Settings</Link>;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Layout>
              <NavDrawer 
                active={this.state.drawerActive}
                pinned={this.state.drawerPinned} 
                permanentAt='xl'
                onOverlayClick={ this.toggleDrawerActive }>
                <List selectable ripple>
                  <ListItem onClick={ this.toggleDrawerActive } itemContent={home} />
                  <ListItem onClick={ this.toggleDrawerActive } itemContent={about} />
                  <ListItem onClick={ this.toggleDrawerActive } itemContent={settings} />
                </List>
              </NavDrawer>
              <Panel className={'page-content-wrapper'}>
                <AppBar
                  title='Workout Witness'
                  onLeftIconClick={ this.toggleDrawerActive }
                  leftIcon="menu"
                />
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/settings" component={Settings}/>
                </Switch>
              </Panel>
            </Layout>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <AppContainer/>,
  document.getElementById('app')
);