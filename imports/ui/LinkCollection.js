import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Links } from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import CreateLink from './CreateLink';

const LinkCollection = () => {
  return (
    <div>
      <PrivateHeader title="Your links"/>
      <CreateLink />
      <LinksList />
    </div>
  )
}

export default LinkCollection;
