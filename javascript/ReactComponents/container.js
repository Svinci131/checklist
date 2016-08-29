import React from 'react';
import Card from './card'
import { getTickets, addTicket } from "./../firebase";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	showInput: false,
    	newItem: null
    }
  }
  render() {
    return (
    	<div className="ui container">
			<h1 className="ui dividing header">Open Ticket Checklist</h1>
			<button className="ui primary button" onClick={this._toggleInput.bind(this)}>ADD</button>
			{ this.state.showInput ? this._newInput() : null}
			<div className="ui cards">
			{this._getCards()}
			</div>
		</div>
    );
  }
  _getCards () {
  	let tickets = this.props.tickets
  	if (tickets) {
	  	return Object.keys(tickets).map(ticket => {
	  		return <Card title={ticket} data={tickets[ticket]}/>
	  	});
	}
	else {
		return "No Open Tickets"
	}
  }
  _toggleInput () {
  	this.setState({showInput: !this.state.showInput})
  }
  _newInput () {
  		return <div className="ui input">
  			<button onClick={this._add.bind(this)}></button>
		  <input onKeyPress={this._makeNewTicketItem.bind(this)} type="text" placeholder="Search..." />
		</div>
  }
  _add() {
  	addTicket(this.state.newItem)
  }
  _makeNewTicketItem (e) {
  	let input = e.target.value; 
  	if (input.length > 0) this.setState({newItem: input})
  	if(e.keyCode == 13) {
 		console.log("done", input)
 	}
  }
}