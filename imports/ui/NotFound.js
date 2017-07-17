import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page not found</h1>
        <p>Hhm, we are unable to find this page</p>
        <Link className="btn btn--link" to="/">Head Home</Link>
      </div>
    </div>
  )
}
