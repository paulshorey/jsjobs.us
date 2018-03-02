import React from "react";
import Header from "components/header/Header.js";
import Footer from "components/Footer.js";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "data/reducers";
const store = createStore(reducer);

export default class Layout extends React.Component {
	render() {
		return (
			<Provider store={store} className="MyProvider">
				<div className="Layout">
					<Header />
					{this.props.children || null}
					<Footer />
				</div>
			</Provider>
		);
	}
}
