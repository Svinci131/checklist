import React from 'react';

export default class Checkbox extends React.Component {
	constructor(props) {
    	super(props);
  	}
	render() {
	    return (
	      <div className="inline field">
	      	<div className="ui checkbox">
	      		<input type="checkbox" tabIndex="0" />
	      		<label>{this.props.title}</label>
	      	</div>
	      </div>
	    );
	}
}