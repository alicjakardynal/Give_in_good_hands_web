import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { HashRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home';



function App() {
  return (
<HashRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/signin" component={SignIn}/>
   
  </Switch>

</HashRouter>

  );
}



class Register extends Component{
  render(){
    return( <h1>Jestesmy w rejestracji</h1>)
  }
}

class SignIn extends Component{
  render(){
    return( <h1>Jestesmy w logowaniu</h1>)
  }
}


export default App;





