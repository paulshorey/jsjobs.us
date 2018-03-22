const initialState = {
	us: { route: "/", key: "us", label: "Select region..." },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)" },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)" },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)" }
};
const areas = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
			break;
	}
};
export default areas;
