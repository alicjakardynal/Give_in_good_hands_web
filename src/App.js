import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { HashRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import HomeHeader from './components/HomeHeader';
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import LogOut from "./components/LogOut";




function App() {
  return (
<HashRouter>
  <HomeHeader/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/signin" component={SignIn}/>
    <Route exact path="/logout" component={LogOut}/>
   
  </Switch>

</HashRouter>

  );
}





export default App;





