import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styled/Header.js";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";

class Header extends React.Component {
	// componentWillMount() {
	// 	this.unlisten = this.props.history.listen((location, action) => {
	// 		const area_key_arr = location.split("/");
	// 		console.log("history change array ", area_key_arr);
	// 		const area_key = area_key_arr[area_key_arr.length - 1] || "";
	// 		console.log("history change key ", area_key);
	// 		this.props.dispatch(actions.my_area(area_key));
	// 	});
	// }
	// componentWillUnmount() {
	// 	this.unlisten();
	// }

	render() {
		const RightIcons = [];
		if (Object.keys(this.props.items_my).length && this.props.items_status === "new") {
			// RightIcons.push(
			// 	<Link to="/my" key="my">
			// 		<span className="caption">
			// 			<span className="ext only-wide">MY</span>
			// 			<span style={{ display: "inline-block", width: "0.1rem" }} />
			// 			<span>JOBS</span>
			// 		</span>
			// 		<span className="icon-user-check" />
			// 	</Link>
			// );
			RightIcons.push(
				<Link to="/my" key="my">
					<span className="caption">
						<span>SAVE</span>
					</span>
					<span className="icon-user-check" />
				</Link>
			);
		}
		// RightIcons.push(
		// 	<Link to="/about">
		// 		<span className="caption">Etc</span>
		// 		<span className="icon-delete" />
		// 	</Link>
		// );
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
				{/* <div className="row_center only-fullsize">
					<span className="caption">if (relevant &amp;&amp; unique &amp;&amp; posted > (Date.now()-1000*60*60*60*24*14)) &#123;</span>
				</div> */}
				{/* <div className="row_center">
					<Link to="/">
						<span className="caption">Search</span>
						<span className="icon-top-select" />
					</Link>
				</div> */}
				{/* <div className="row_right">
					<Link to="/">
						<span className="caption">SAVE </span>
						<span className="icon-ui-thumbs-up" />
					</Link>
				</div> */}
				<div className="row_right">{RightIcons}</div>
			</Styled.Header>
		);
	}
}

/*
		Connect redux data
	*/
const mapStateToProps = (data, ownProps) => {
	return {
		items_my: data.my.items,
		items_status: data.my.items_status || "new"
	};
};
const ConnectedHeader = connect(mapStateToProps)(Header);

/*
		Components
	*/
export default ConnectedHeader;
