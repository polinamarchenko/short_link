import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';


const PrivateHeader = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={() => Accounts.logout() }>Logout</button>
    </div>
  )
}

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
