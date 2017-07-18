import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { Links } from './../api/links';
import LinksListItem from './LinksListItem';
import Flipmove from 'react-flip-move';

export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    }
  }
  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('mylinks');
      const links = Links.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({links})
    });
  }
  componentWillUnmount() {
    console.log('Component will unmount');
    this.linksTracker.stop();
  }
  renderListItems() {
    if (this.state.links.length < 1) {
      return (
        <div className="item">
          <p className="item__status-message">
            No links found
          </p>
        </div>
      )
    }
    return this.state.links.map((link, i) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={i} shortUrl = {shortUrl} {...link}/>
    });
  }
  render() {
    return (
      <div>
        <Flipmove maintainContainerHeight={true}>
          {this.renderListItems()}
        </Flipmove>
      </div>
    )
  }
}
