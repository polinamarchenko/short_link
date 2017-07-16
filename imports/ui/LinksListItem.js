//grab url require('meteor/meteor').Meteor.absoluteUrl() - return the url
import React from 'react';
import PropTypes from 'prop-types';

export default class LinksListItem extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.url} target='_blank'>{this.props.url}</a>
        <p>
          <a href={this.props.shortUrl} target='_blank'>{this.props.shortUrl}</a>
        </p>
      </div>
    )
  }
}

LinksListItem.propTypes = {
  url: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};
