import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

//we have removed autopublish dependency and creating our custom publish method
if (Meteor.isServer) {
  Meteor.publish('mylinks', () => {
    return Links.find();
  });
}
