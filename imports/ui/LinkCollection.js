import React from 'react';
import {Link} from 'react-router-dom';

export default class LinkCollection extends React.Component {
  render() {
    return (
      <div>
        <p>Link component here</p>
        <Link to="/">Logout</Link>
      </div>
    )
  }
}
