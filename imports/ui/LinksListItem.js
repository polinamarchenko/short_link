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

  renderStats() {
    const lastVisitedTime = this.props.lastVisitedAt ? `(visited ${moment(this.props.lastVisitedAt).fromNow()})` : null;
    const visitMessage = (this.props.visitedCount === 1) ? 'visit' : 'visits';
    return <p>{this.props.visitedCount} {visitMessage} {lastVisitedTime}</p>
  }

  render() {
    let copyButton = this.state.justCopied ? 'Copied' : 'Copy';
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <div>{this.renderStats()}</div>
        <button className="btn btn--small" ref="copy" data-clipboard-text={this.props.shortUrl}>{copyButton}</button>
        <button className="btn btn--small" onClick={() => {
          Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
        }}>
          {this.props.visible ? 'Hide' : 'Unhide'}
        </button>
        <a className="btn btn--small btn--link" href={this.props.shortUrl} target='_blank'>Visit</a>
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
