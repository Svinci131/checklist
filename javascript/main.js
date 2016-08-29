import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { Container } from './ReactComponents'
import { getTickets } from './firebase';
import { routes } from './router'

//idk
const Router = require('director').Router

// const routes = {
// 	'/': function() {
// 		getTickets()
// 		.then(tickets => {
// 			ReactDOM.render(
// 		    <Container tickets={tickets}/>,
// 		    document.getElementById('react-container'));
// 		})
// 		.catch(err=> console.log(err))
// 	},
// 	'/:id': function(id) {
// 		getTickets()
// 		.then(tickets => {
// 			ReactDOM.render(
// 		    <ItemChecklist />,
// 		    document.getElementById('react-container'));
// 		})
// 		.catch(err=> console.log(err))
// 	}
// }
const router = new Router( routes ).init('/home');
