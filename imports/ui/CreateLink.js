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


    Meteor.call('links.insert', url, (err, res) => {
      if (!err) {
        this.onClose();
      } else {
        this.setState({error: err.reason});
      }
    });
  }

  onClose() {
    this.setState({isOpen: false, url: '', error: ''});
  }
  render() {
    return (
      <div>
        <button className="btn" onClick={() => this.setState({isOpen: true})}>+ Add link</button>

        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.onClose.bind(this)}>

          <h1>Add Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              placeholder="URL"
              ref="url"
              value={this.state.url}
              onChange={this.onChange.bind(this)}
            />
            <button>Add link</button>
          </form>
          <button onClick={this.onClose.bind(this)}>X</button>
        </Modal>
      </div>
    )
  }
}
