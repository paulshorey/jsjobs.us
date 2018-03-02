/*jshint esversion: 6 */
import React, { Component } from "react";
// import * as Styled from "./styled/Results.js";
// import { getAPIHostname } from "lib/getAPI";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";

/* 
	Component 
*/
class Query extends React.Component {
	handleUsernameSubmission(e) {
		if (e) {
			e.preventDefault();
		}
		const name = this.refs.skill.value;
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleUsernameSubmission}>
					<input placeholder="skill..." ref="skill" />
					<input type="submit" value="Search" />
				</form>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
});
const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		// dispatch(actions.setVisibilityFilter(ownProps.filter));
	}
});
const ConnectedQuery = connect(mapStateToProps, mapDispatchToProps)(Query);

/*
	Components
*/
export default ConnectedQuery;
