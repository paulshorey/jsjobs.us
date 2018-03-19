export const area_item_my = (item, area_key) => ({
	type: "area_item_my",
	item,
	area_key
});
export const area_items_add = (items, area_key) => ({
	type: "area_items_add",
	items,
	area_key
});
export const area_filter_add = (filter, area_key) => ({
	type: "area_filter_add",
	filter,
	area_key
});
export const area_filter_remove = (filter, area_key) => ({
	type: "area_filter_remove",
	filter,
	area_key
});
