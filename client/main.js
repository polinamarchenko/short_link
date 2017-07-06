import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import LinkCollection from './../imports/ui/LinkCollection';
import NotFound from './../imports/ui/NotFound';

const routes = (
  <Router>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/links' component={LinkCollection}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
