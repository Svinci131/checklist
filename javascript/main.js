import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import { Container } from './ReactComponents'
import { items } from './basicCheckListItems.js';
import { getTickets, addTicket } from "./firebase";

getTickets()
.then(tickets => {
	ReactDOM.render(
    <Container tickets={tickets}/>,
    document.getElementById('react-container'));
})
.catch(err=> console.log(err))


console.log("hi")