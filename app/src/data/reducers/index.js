import { combineReducers } from "redux";
import areas from "./areas";
import my from "./my";

const data = combineReducers({
	areas,
	my
});

export default data;
