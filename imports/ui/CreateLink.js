import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Links } from '../api/links';
import LinksList from './LinksList';

export default class CreateLink extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    let url = this.refs.url.value.trim();
    if (url) {
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL"/>
          <button>Add link</button>
        </form>
      </div>
    )
  }
}
