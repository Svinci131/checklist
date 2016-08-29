import React from 'react';
import CheckBox from './checkbox'

export default class Issue extends React.Component {
	constructor(props) {
    	super(props);
  	}
	render() {
		let data = this.props.data
	    return (
	      <div className="inline field">
	      	<h2 class="ui header">
			  <div class="content">
			    {data.title}
			
			  </div>
			</h2>
			{this._checks()}
	      </div>
	    );
	}
	_checks() {
		let checks = this.props.data.checks
		console.log(this.props.data.checks)
		if (checks) {
			return checks.map(check => <CheckBox title={check} />)
		}
		else {
			return Nope
		}
 	}
}

    // <div class="sub header">status</div>


