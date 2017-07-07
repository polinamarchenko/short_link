import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class LinkCollection extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <p>Link component here</p>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    )
  }
}
