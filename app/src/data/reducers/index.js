import { combineReducers } from "redux";
import jobs from "./jobs";
import filters from "./filters";
import areas from "./areas";

const data = combineReducers({
	jobs,
	filters,
	areas
});

export default data;
