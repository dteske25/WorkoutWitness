import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from "../components/Home";
import About from "../components/About";
import Settings from "../components/Settings";
import Navbar from "../components/Navbar";
import configureStore from '../reducers/configureStore'; 
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


const store = configureStore();

class Container extends Component {
  render(){
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    )
  }
}

class HomeContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Container}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="settings" component={Settings}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(
  <HomeContainer/>,
  document.getElementById('app')
);