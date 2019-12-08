import React, { Component } from "react";
import Navbar from './components/NavBar/NavBar';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/APIList/Home";
import FoodVisualization from "./components/FoodVisualization/FoodVisualization";
import FoodCalories from "./components/FoodCalories/FoodCalories";

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/food-calories/" component={FoodCalories}/>
          <Route exact path="/visualization/" component={FoodVisualization}/>
        </Switch>
      </>
    );
  }
}

export default App;
