/*jshint esversion: 6 */
import React from "react";
import * as Styled from "./styled/SelectLink.js";
import { Link } from "react-router-dom";
/* redux */
import { connect } from "react-redux";
// import * as actions from "data/actions";
/* custom */
// import UISelect from "components/ui/Select";

/* 
	Component 
*/
class Select extends React.Component {
	constructor() {
		super();
		this.state = {
			option_placeholder: "Select region...",
			options: {
				"/in/la": "in LA (Southern California)",
				"/in/nyc": "in NYC (New York City)",
				"/in/denver": "in NYC (Colorado)"
			}
		};
	}
	toggleOpen = multiplier => {
		this.refs.query_group.classList.toggle("opened");
	};
	componentWillMount = () => {
		this.setState({ option_selected: this.state.options[this.props.option] });
	};
	renderOptions = () => {
		const Options = [];
		for (let url in this.state.options) {
			let title = this.state.options[url];
			Options.push(
				<Link className="option" to={url} key={url}>
					{title}
				</Link>
			);
		}
	};
	render() {
		return (
			<Styled.Select {...this.props}>
				<div
					className="query_group"
					onClick={() => {
						this.toggleOpen(1);
					}}
					ref="query_group"
				>
					{/* <span className="query_title">in:&nbsp;</span> */}
					<div className="query_select">
						<div className="option value">{this.state.option_selected || this.state.option_placeholder}</div>
						<div className="dropdown">
							<Link className="option" to="/in/la">
								in LA (Southern California)
							</Link>
							<Link className="option" to="/in/nyc">
								in NYC (New York City)
							</Link>
							<Link className="option" to="/in/denver">
								in Denver (Colorado)
							</Link>
						</div>
					</div>
					<span className="query_button">
						<span className="icon-select" />
					</span>
					{/* <span className="query_title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> */}
				</div>
			</Styled.Select>
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
const ConnectedSelect = connect(mapStateToProps, mapDispatchToProps)(Select);

/*
	Components
*/
export default ConnectedSelect;
