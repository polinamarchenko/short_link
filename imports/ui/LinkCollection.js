import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Links } from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import CreateLink from './CreateLink';
import LinksListFilters from './LinksListFilters';

const LinkCollection = () => {
  return (
    <div>
      <PrivateHeader title="Your links"/>
      <LinksListFilters />
      <CreateLink />
      <LinksList />
    </div>
  )
}

export default LinkCollection;
