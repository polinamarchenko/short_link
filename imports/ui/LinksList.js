import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from './../api/links';
import LinksListItem from './LinksListItem';

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
      const links = Links.find().fetch();
      this.setState({links})
    });
  }
  componentWillUnmount() {
    console.log('Component will unmount');
    this.linksTracker.stop();
  }
  renderListItems() {
    return this.state.links.map((link, i) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={i} shortUrl = {shortUrl} {...link}/>
      // return <li key={i}>{link.url}</li>
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderListItems()}
        </ul>
      </div>
    )
  }
}
