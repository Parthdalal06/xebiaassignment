import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './logincomponent';
import Search from './searchcomponent';


export default class Main extends Component {
 
  render(){
    return (
        <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/search' component={Search} />} />
        <Redirect to="/login" />
    </Switch>
    );
  }
}