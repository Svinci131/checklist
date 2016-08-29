import React from 'react';
import { removeTicket } from "./../firebase";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" />
          <div className="header">
            <a href="#/">{this.props.title}</a>
          </div>
          <div className="meta">
          </div>
          <div className="description">
            description
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Edit</div>
            <div onClick={this._removeTicket.bind(this)} className="ui basic red button">Delete</div>
          </div>
        </div>
      </div>
    );
  }
  _removeTicket() {
    removeTicket(this.props.title)
  }
}

       


