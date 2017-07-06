import React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Login component here</p>
        <Link to="/signup">Need an account?</Link>
      </div>
    )
  }
}
