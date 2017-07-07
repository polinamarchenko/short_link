import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
import createHistory from 'history/createBrowserHistory';

import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import LinkCollection from './../imports/ui/LinkCollection';
import NotFound from './../imports/ui/NotFound';

const history = createHistory();

const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/links' component={LinkCollection}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isAuthenticated && isUnauthenticatedPage) {
    history.push('/links');
  } else if (!isAuthenticated && isAuthenticatedPage) {
    history.push('/');
  }
  console.log('isAuthenticated', isAuthenticated);

});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
