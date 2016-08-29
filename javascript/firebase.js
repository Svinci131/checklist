import { items } from './basicCheckListItems.js';
import { firebase } from "firebase";

const ref = new Firebase('https://checlist.firebaseio.com/data');

function getTickets () {
	return new Promise(function(res, rej) {
	  	ref.on("value", function(snapshot) {
		  	let data = snapshot.val();
		  	res(data);
		}, function (errorObject) {
			rej(errorObject.code);
		});
	});
}

function addTicket(title) {
  	const newTicket = ref.child(title);
	newTicket.set({
	  date_of_birth: "June 23, 1912",
	  full_name: "Alan Turing"
	});
}
function removeTicket(title) {
  	const newTicket = ref.child(title);
	newTicket.set(null);
}

export {
	getTickets,
	addTicket,
	removeTicket
}