import { combineReducers } from "redux";
import my_areas from "./my_areas";
import search_areas from "./search_areas";

const data = combineReducers({
	my_areas,
	search_areas
});

export default data;
