import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Login from './../ui/Login';
import Signup from './../ui/Signup';
import LinkCollection from './../ui/LinkCollection';
import NotFound from './../ui/NotFound';

const history = createHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isAuthenticated && isUnauthenticatedPage) {
    history.replace('/links');
  } else if (!isAuthenticated && isAuthenticatedPage) {
    history.replace('/');
  }
  console.log('isAuthenticated', isAuthenticated);
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={() => {
        return Meteor.userId() ? <Redirect to="/links" /> : <Login />
      }} />
      <Route path='/signup' render={() => {
        return Meteor.userId() ? <Redirect to="/links" /> : <Signup />
      }}/>
      <Route path='/links' render={() => {
        return Meteor.userId() ? <LinkCollection /> : <Redirect to="/" />
      }}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)
