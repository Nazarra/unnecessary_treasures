import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from "./components/Home";


class App extends Component {
  render() {
    return (

    <HashRouter>
      <>
        <Route exact path='/' component={Home} />
      </>
    </HashRouter>
  )}

}
export default App;
