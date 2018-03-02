import { combineReducers } from "redux";
import jobs from "./jobs";
// import visibilityFilter from "./visibilityFilter";

const jobData = combineReducers({
	jobs
	// visibilityFilter
});

export default jobData;
