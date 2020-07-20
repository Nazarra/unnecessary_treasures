import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  HashRouter,
  Route,
  // Link,
  // Switch,
  // NavLink,
} from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/Register";


class App extends Component {
  render() {
    return (

    <HashRouter>
      <>
        <Route exact path='/' component={Home} />
        <Route path='/Register' component={Register} />
      </>
    </HashRouter>
  )}

}
export default App;
