import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

//we have removed autopublish dependency and creating our custom publish method
if (Meteor.isServer) {
  Meteor.publish('mylinks', function () {
    let userId = this.userId;
    return Links.find({ userId });
  });
}

Meteor.methods({
  addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Meteor.Error('invalid arguments', 'a and b schould be numbers');
    }
    return a+b;
  }
})
