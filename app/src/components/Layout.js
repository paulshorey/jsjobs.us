import React from "react";
import Header from "components/header/Header.js";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "data/reducers";
import { createLogger } from "redux-logger";
const logger = createLogger({
	collapsed: true
});
const store = createStore(reducer, applyMiddleware(logger));

export default class Layout extends React.Component {
	render() {
		return (
			<Provider store={store} className="MyProvider">
				<div className="Layout" style={Object.assign({ minHeight: "100vh" }, this.props.style || {})}>
					<Header />
					{this.props.children || null}
				</div>
			</Provider>
		);
	}
}
