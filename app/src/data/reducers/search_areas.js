const initialState = {
	us: { route: "/", key: "us", label: "Select region...", filters: [], items: [] },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)", filters: [], items: [] },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)", filters: [], items: [] },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)", filters: [], items: [] }
};
const search_areas = (state = initialState, action) => {
	switch (action.type) {
		case "area_item_my":
			// requires: action.area_key, action.items
			delete state[action.area_key].items[action.item._id];
			return Object.assign({}, state);
			break;
		case "area_items_add":
			// requires: action.area_key, action.items
			var newItems = state[action.area_key].items.concat(action.items);
			state[action.area_key].items = newItems;
			return Object.assign({}, state);
			break;
		case "area_filter_add":
			// requires: action.area_key, action.items
			let _id = "";
			for (const prop in action.filter) {
				_id += action.filter[prop];
			}
			action.filter._id = _id;
			state[action.area_key].filters.push(action.filter);
			return Object.assign({}, state);
			break;
		case "area_filter_remove":
			// requires: action.area_key, action.items
			delete state[action.area_key].filters[action.filter._id];
			return Object.assign({}, state);
			break;
		default:
			return state;
			break;
	}
};

export default search_areas;
