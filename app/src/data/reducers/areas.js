const initialState = {
	us: { route: "/", key: "us", label: "Select region...", filtersDefault: [], filters: [], jobs: [] },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)", filtersDefault: [], filters: [], jobs: [] },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)", filtersDefault: [], filters: [], jobs: [] },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)", filtersDefault: [], filters: [], jobs: [] }
};
const areas = (state = initialState, action) => {
	switch (action.type) {
		case "AREA_ADD_JOBS":
			var newJobs = state[action.area_key].jobs.concat(action.jobs);
			// mutable array
			state[action.area_key].jobs = newJobs;
			return Object.assign({}, state);
		default:
			return state;
	}
};

export default areas;
