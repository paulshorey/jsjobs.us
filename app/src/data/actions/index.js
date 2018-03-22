export const area_status_change = (status, area_key) => ({
	type: "area_status_change",
	status,
	area_key
});
// export const area_items_set = (items, area_key) => {
// 	return {
// 		type: "area_items_set",
// 		items,
// 		area_key
// 	};
// };
export const my_area = area_key => ({
	type: "my_area",
	area_key
});
export const my_item_save = (item, area_key) => ({
	type: "my_item_save",
	item,
	area_key
});
export const my_items_status = items_status => ({
	type: "my_items_status",
	items_status
});
export const area_item_add = (item, area_key) => ({
	type: "area_item_add",
	item,
	area_key
});
export const my_filter_add = (filter, area_key) => ({
	type: "my_filter_add",
	filter,
	area_key
});
export const my_filter_remove = (filter, area_key) => ({
	type: "my_filter_remove",
	filter,
	area_key
});
