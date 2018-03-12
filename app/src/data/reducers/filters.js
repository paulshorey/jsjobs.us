const initialState = {
	hint: {
		_id: "hint",
		value: "Use Regular Expressions in search. For example:",
		property: "location",
		multiplier: 0
	},
	example: {
		_id: "example",
		value: "C# | C++ | Java[^a-zA-Z]+",
		property: "text",
		multiplier: 1
	},
	example2: {
		_id: "example2",
		value: "intern | junior | entry",
		property: "text",
		multiplier: -10
	}
};

const filters = (state = initialState, action) => {
	switch (action.type) {
		case "FILTER_ADD":
			delete state.hint;
			let _id = "";
			for (const prop in action.filter) {
				_id += action.filter[prop];
			}
			action.filter._id = _id;
			return Object.assign({}, state, { [_id]: action.filter });
		case "FILTER_REMOVE":
			var newState = Object.assign({}, state);
			delete newState[action.filter._id];
			delete newState.hint;
			return newState;
		default:
			return state;
	}
};

export default filters;
