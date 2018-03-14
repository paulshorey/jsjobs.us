import React from "react";
import { Link } from "react-router-dom";
import SearchSelect from "components/search/SelectLink";
import * as Styled from "./styled/Header.js";

export default class Header extends React.Component {
	render() {
		return (
			<Styled.Header className="row">
				<div className="row_left">
					<Link to="/">
						<span className="icon-top-logo" />
						<span className="caption">
							<span>JOBS</span>
							<span className="ext only-wide">.US</span>
						</span>
					</Link>
				</div>
				<div className="row_center">
					<Link to="/">
						<span className="caption">in LA area</span>
						<span className="icon-top-select" />
					</Link>
				</div>
				{/* <div className="row_right">
					<Link to="/">
						<span className="caption">SAVE </span>
						<span className="icon-ui-thumbs-up" />
					</Link>
				</div> */}
				<div className="row_right">
					<Link to="/">
						<span className="caption">more</span>
						<span className="icon-ui-more" />
					</Link>
				</div>
			</Styled.Header>
		);
	}
}
