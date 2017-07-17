import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Links } from '../api/links';
import LinksList from './LinksList';

export default class CreateLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  onChange(e) {
    this.setState({
      url: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    let url = this.state.url;

    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) {
          this.setState({url: ''});
        }
      });
    }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            placeholder="URL"
            value={this.state.url}
            onChange={this.onChange.bind(this)}
          />
          <button>Add link</button>
        </form>
      </div>
    )
  }
}
