import React, {PropTypes, Component} from 'react';
import Issue from './issue'
import { items } from './../basicCheckListItems.js';

export default class ItemChecklist extends React.Component {
	constructor(props) {
    	super(props);
  	}
	render() {
	    return (
	    	<div className="ui list">
				<div className="item">
					<Issue data={items['isAttached']}/>
				</div>
			  	<div className="item">
			  		<Issue data={items['isTracking']}/>
			  	</div>
			  	<div className="item">
			  		<Issue data={items['arePixelsFiring']}/>
			  	</div>
			  	<div className="item">
			  		<Issue data={items['viewability']}/>
			  	</div>
			  	<div className="item">
			  		<Issue data={items['mouseEvents']}/>
			  	</div>
			</div>
	    );
  	}
}

