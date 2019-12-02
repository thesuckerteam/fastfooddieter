import React, { Component } from "react";
import './App.css';
import Navbar from './components/NavBar';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/Home"
import Food from "./components/Food"

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/foods/" component={Food}/>
        </Switch>
      </>
    );
  }
}

export default App;
