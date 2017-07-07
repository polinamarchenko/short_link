import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { routes, onAuthChange } from './../imports/routes/routes';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Meteor.call('addNumbers', 4, 5, (err, res) => {
    console.log('addNumbers arguments', err, res);
  })
  ReactDOM.render(routes, document.getElementById('app'));
});
