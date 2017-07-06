import React from 'react';
import {Link} from 'react-router-dom';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h2>Join Short Link</h2>
        <Link to="/">Have an account?</Link>
      </div>
    )
  }
}
