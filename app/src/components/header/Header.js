import React from "react";
import Nav from "components/header/Nav";
import SearchInput from "components/header/Input";

export default class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<SearchInput />

				<Nav />
			</div>
		);
	}
}
