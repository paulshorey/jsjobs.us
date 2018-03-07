import { combineReducers } from "redux";
import jobs from "./jobs";
import filters from "./filters";

const data = combineReducers({
	jobs,
	filters
});

export default data;
