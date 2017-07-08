import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { routes, onAuthChange } from './../imports/routes/routes';
import './../imports/startup/simpl-schema-config.js';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Meteor.call('links.insert', 'Hello test 2');
  ReactDOM.render(routes, document.getElementById('app'));
});
