//grab url require('meteor/meteor').Meteor.absoluteUrl() - return the url
import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

export default class LinksListItem extends React.Component {
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);
    this.clipboard.on('success', () => {
      alert('it worked');
    }).on('error', () => {
      alert('Unable to copy, please menually copy the link');
    })
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div>
        <a href={this.props.url} target='_blank'>{this.props.url}</a>
        <p>
          <a href={this.props.shortUrl} target='_blank'>{this.props.shortUrl}</a>
        </p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>Copy</button>
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
