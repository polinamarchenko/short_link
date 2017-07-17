import React from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';
import LinksList from './LinksList';

export default class CreateLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isOpen: false,
      error: ''
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
          this.setState({url: '', isOpen: false});
        }
      });
    }

  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({isOpen: true})}>+ Add link</button>

        <Modal isOpen={this.state.isOpen} contentLabel="Add link">
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              placeholder="URL"
              value={this.state.url}
              onChange={this.onChange.bind(this)}
            />
            <button>Add link</button>
          </form>
          <button onClick={() => this.setState({isOpen: false, url: ''})}>X</button>
        </Modal>
      </div>
    )
  }
}
