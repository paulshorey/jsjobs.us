/*jshint esversion: 6 */
import React from "react";
import * as Styled from "./styled/DropdownLink.js";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";
/* custom */
// import UIDropdownLink from "components/ui/DropdownLink";

/* 
	Component 
*/
class DropdownLink extends React.Component {
	constructor() {
		super();
		this.state = {
			option_selected: "/",
			options: {
				"/": "Select region...",
				"/in/la": "in LA (Southern California)",
				"/in/nyc": "in NYC (New York City)",
				"/in/denver": "in NYC (Colorado)"
			}
		};
	}
	toggleOpen = multiplier => {
		this.refs.query_group.classList.toggle("opened");
	};

	/*
		to detect route change using react-router-dom
	*/
	updateLocation = location => {
		console.log("updateLocation", location.pathname);
		this.setState({ option_selected: location.pathname });
	};
	componentWillMount() {
		const { history } = this.props;
		// this.unsubscribeFromHistory = history.listen(this.updateLocation);
		this.updateLocation(history.location);
		// option, form above
		// this.setState({ option_selected: this.state.options[this.props.option] });
	}
	componentWillUnmount() {
		if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
	}

	render() {
		const Options = [];
		for (let url in this.state.options) {
			let title = this.state.options[url];
			console.log("this.state.option_selected", this.state.option_selected);
			Options.push(
				<Link className={"option " + (this.state.option_selected === url ? " selected" : "")} to={url} key={url}>
					{title}
				</Link>
			);
		}
		return (
			<Styled.DropdownLink
				{...this.props}
				className="DropdownLink"
				innerRef={el => {
					this.DropdownLink = el;
				}}
			>
				<div
					className="overlay"
					ref="overlay"
					onClick={e => {
						console.log("clicked Overlay", e.target);
						this.DropdownLink.classList.toggle("active");
					}}
				/>
				<div
					className="content"
					ref="content"
					onClick={e => {
						console.log("clicked Overlay", e.target);
						this.DropdownLink.classList.remove("active");
					}}
				>
					<div
						className="dropdown"
						onClick={e => {
							e.stopPropagation();
							this.DropdownLink.classList.toggle("active");
						}}
					>
						{Options}
					</div>
					<span
						className="button"
						onClick={e => {
							e.stopPropagation();
							this.DropdownLink.classList.toggle("active");
						}}
					>
						<span className="icon-top-select" />
					</span>
				</div>
			</Styled.DropdownLink>
		);
	}
}
const mapStateToProps = (state, ownProps) => ({
	filters: state.filters.length ? state.filters : ownProps.filters
});
const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch_filterAdd: filter => {
		// dispatch(actions.filterAdd(filter));
	}
});
const ConnectedDropdownLink = connect(mapStateToProps, mapDispatchToProps)(DropdownLink);

/*
	Components
*/
export default withRouter(ConnectedDropdownLink);
