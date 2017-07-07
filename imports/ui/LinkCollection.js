import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from './LinksList';

export default class LinkCollection extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  onSubmit(e) {
    e.preventDefault();

    let url = this.refs.url.value.trim();
    if (url) {
      Links.insert({ url });
      this.refs.url.value = '';
    }

  }
  render() {
    return (
      <div>
        <p>My links</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL"/>
          <button>Add link</button>
        </form>
        <LinksList />
        <button onClick={this.onLogout}>Logout</button>
      </div>
    )
  }
}
