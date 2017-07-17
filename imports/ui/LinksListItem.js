//grab url require('meteor/meteor').Meteor.absoluteUrl() - return the url
import {Meteor} from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';


export default class LinksListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justCopied: false
    }
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);
    this.clipboard.on('success', () => {
      this.setState({justCopied: true});
      setTimeout(() => this.setState({justCopied: false}), 1000);
    }).on('error', () => {
      alert('Unable to copy, please menually copy the link');
    })
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    let copyButton = this.state.justCopied ? 'Copied' : 'Copy';
    return (
      <div>
        <a href={this.props.url} target='_blank'>{this.props.url}</a>
        <p>
          <a href={this.props.shortUrl} target='_blank'>{this.props.shortUrl}</a>
        </p>
        <p>{this.props.visitedCount} - {moment(this.props.lastVisitedAt).fromNow()}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>{copyButton}</button>
        <button onClick={() => {
          Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
        }}>
          {this.props.visible ? 'Hide' : 'Unhide'}
        </button>
      </div>
    )
  }
}

LinksListItem.propTypes = {
  url: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisitedAt: PropTypes.number
};
