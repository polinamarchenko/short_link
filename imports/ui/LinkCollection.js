import React from 'react';
import { Meteor } from 'meteor/meteor';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import CreateLink from './CreateLink';
import LinksListFilters from './LinksListFilters';

const LinkCollection = () => {
  return (
    <div>
      <PrivateHeader title="Your links"/>
      <LinksListFilters />
      <LinksList />
      <CreateLink />
    </div>
  )
}

export default LinkCollection;
