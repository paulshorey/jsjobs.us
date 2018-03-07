const filters = (state = [], action) => {
	switch (action.type) {
		case "FILTER_ADD":
			return [Object.assign({}, action.filter), ...state];
		default:
			return state;
	}
};

export default filters;
