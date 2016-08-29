const items = {
	isAttached: {
		title: "Is the script tag being attached?",
		checks: ["Appended as a script?","Response data coming back? ","Cachebuster/query string on the moatad.js request?","Dropped in correct location?","Secure or insecure tag?"]
	},
	isTracking: {
		title: "Is it tracking the right element?",
		checks: []
	}, 
	arePixelsFiring: {
		title: "Are all IDs and keys coming in correctly on pixel fires?",
		checks: []
	},
	isClientIssue: {
		title: "Is it a Client issue? ",
		checks: []
	},
	viewability: {
		title: "Are viewability events tracking correctly?",
		checks: []
	},
	mouseEvents: {
		title: "Are Mouse events tracking correctly?",
		checks: []
	}
}

export { items }