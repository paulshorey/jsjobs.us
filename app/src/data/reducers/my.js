const initialState = { filters: [], items: {}, items_status: "new", area_key: "us" };
const my = (state = initialState, action) => {
	switch (action.type) {
		case "my_item_save":
			state.items[action.item._id] = Object.assign({}, action.item);
			state.items = Object.assign({}, state.items);
			return Object.assign({}, state);
		case "my_area":
			state.area_key = action.area_key;
			return Object.assign({}, state);
		case "my_items_status":
			state.items_status = action.items_status;
			return Object.assign({}, state);
			break;
		case "my_filter_add":
			let _id = "";
			for (const prop in action.filter) {
				_id += action.filter[prop];
			}
			action.filter._id = _id;
			state.filters.push(action.filter);
			return Object.assign({}, state);
			break;
		case "my_filter_remove":
			let f_index = state.filters.findIndex(function(filter) {
				return filter._id === action.filter._id;
			});
			state.filters.splice(f_index, 1);
			return Object.assign({}, state);
			break;
		default:
			return state;
			break;
	}
};

export default my;
