const initialState = {
	us: { filters: [], items: [] },
	la: { filters: [], items: [] },
	nyc: { filters: [], items: [] },
	denver: { filters: [], items: [] }
};
const my_areas = (state = initialState, action) => {
	switch (action.type) {
		case "area_item_my":
			state[action.area_key].items.push(action.item);
			return Object.assign({}, state);
		default:
			return state;
	}
};

export default my_areas;
