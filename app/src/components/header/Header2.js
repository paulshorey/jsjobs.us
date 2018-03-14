import React from "react";
import { Link } from "react-router-dom";
import SearchSelect from "components/search/SelectLink";
import * as Styled from "./styled/Header2.js";

export default class Header extends React.Component {
	render() {
		return (
			<Styled.Header className="row">
				<div className="row_center">
					<Link to="/">
						<span className="caption">New Search</span>
						<span className="icon-top-select" />
					</Link>
				</div>
			</Styled.Header>
		);
	}
}
