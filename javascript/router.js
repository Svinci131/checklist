import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { getTickets } from "./firebase";
import { Container, ItemCheckList } from './ReactComponents'
// import ItemCheckList from './ReactComponents/ItemChecklist'

const routes = {
	'/': function() {
		getTickets()
		.then(tickets => {
			ReactDOM.render(
		    <Container tickets={tickets}/>,
		    document.getElementById('react-container'));
		})
		.catch(err=> console.log(err))
	},
	'/:id': function(id) {
		getTickets()
		.then(tickets => {
			ReactDOM.render(
		    <ItemCheckList />,
		    document.getElementById('react-container'));
		})
		.catch(err=> console.log(err))
	}
}

export { routes }


