/*jshint esversion: 6 */
import React, { Component } from "react";
import * as Styled from "./styled/Query.js";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";

/* 
	Component 
*/
class Query extends React.Component {
	returnDefaultState() {
		return {
			input_location_multiplier: 1,
			input_location_value: "",
			input_location_options_visible: false
		};
	}
	constructor() {
		super();
		this.state = this.returnDefaultState();
	}
	inputLocationChange(multiplier) {
		// set value:
		console.log(this.refs.input_location.value, "x" + multiplier);
		this.setState({ input_location_multiplier: multiplier });
		this.props.dispatch_filterAdd({ location: this.refs.input_location.value, location_multiplier: multiplier });
	}
	inputLocationOptions() {
		// toggle:
		this.setState({ input_location_options_visible: !this.state.input_location_options_visible });
	}
	inputLocationReset() {
		// reset value AND multiplier:
		this.setState(this.returnDefaultState());
	}
	render() {
		return (
			<Styled.Query>
				<div className="input_group">
					<input className="input" placeholder="Specific location..." ref="input_location" />
					<div
						className="select"
						onClick={() => {
							this.inputLocationOptions();
						}}
					>
						<div className={"select_options " + (this.state.input_location_options_visible ? "opened" : "")}>
							<div
								className={"select_option " + (this.state.input_location_multiplier === 10 ? "selected" : "")}
								onClick={() => {
									this.inputLocationChange(10);
								}}
							>
								!important
							</div>
							<div
								className={"select_option " + (this.state.input_location_multiplier === 3 ? "selected" : "")}
								onClick={() => {
									this.inputLocationChange(3);
								}}
							>
								+++
							</div>
							<div
								className={"select_option " + (this.state.input_location_multiplier === 2 ? "selected" : "")}
								onClick={() => {
									this.inputLocationChange(2);
								}}
							>
								++
							</div>
							<div
								className={"select_option " + (this.state.input_location_multiplier === 1 ? "selected" : "")}
								onClick={() => {
									this.inputLocationChange(1);
								}}
							>
								+
							</div>
							<div
								className={"select_option " + (this.state.input_location_multiplier === -1 ? "selected" : "")}
								onClick={() => {
									this.inputLocationChange(-1);
								}}
							>
								-
							</div>
							<div
								className={"select_option " + (this.state.input_location_multiplier === -2 ? "selected" : "")}
								onClick={() => {
									this.inputLocationChange(-2);
								}}
							>
								--
							</div>
							<div
								className={"select_option " + (this.state.input_location_multiplier === -3 ? "selected" : "")}
								onClick={() => {
									this.inputLocationChange(-3);
								}}
							>
								---
							</div>
							<div
								className={"select_option " + (this.state.input_location_multiplier === -10 ? "selected" : "")}
								onClick={() => {
									this.inputLocationChange(-10);
								}}
							>
								no way!
							</div>
						</div>
						<div className="select_value">
							+
							<span className="icon-dropdown"> v </span>
						</div>
					</div>
				</div>
			</Styled.Query>
		);
	}
}
const mapStateToProps = (state, ownProps) => ({
	filters: state.filters.length ? state.filters : ownProps.filters
});
const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch_filterAdd: filters => {
		dispatch(actions.filterAdd(filters));
	}
});
const ConnectedQuery = connect(mapStateToProps, mapDispatchToProps)(Query);

/*
	Components
*/
export default ConnectedQuery;
