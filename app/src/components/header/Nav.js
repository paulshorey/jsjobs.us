import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
	render() {
		return (
			<div className="Nav">
				<div className="Nav_section">
					<div>
						<Link to="/in/la">Try Los Angeles &raquo;</Link>
					</div>
					<div>
						<Link to="/">&laquo; Go back to search nationwide</Link>
					</div>
				</div>
			</div>
		);
	}
}
