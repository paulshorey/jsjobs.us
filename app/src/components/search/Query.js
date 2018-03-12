/*jshint esversion: 6 */
import React from "react";
import * as Styled from "./styled/Query.js";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";
/* custom */
// import UISelect from "components/ui/Select";

/* 
	Component 
*/
const constructInitialState = function(props) {
	return {
		qInput_value: "",
		qInput_multiplier: props.queryProperty === "location" ? 3 : 10
	};
};
class Query extends React.Component {
	constructor(props) {
		super(props);
		this.state = constructInitialState(props);
	}
	inputValueChange = e => {
		const value = e.target.value;
		// set value:
		this.setState({ qInput_value: value });
	};
	inputMultiplierChange = multiplier => {
		// set value:
		this.setState({ qInput_multiplier: multiplier });
		// only act "onBlur"
		if (this.refs.query_selector_dropdown.classList.contains("opened") && this.refs.qInput.value) {
			this.inputValueSubmit(multiplier); // pass multiplier, because setState is Async, and doesnt change fast enough
		}
		// DOM element:
		this.refs.query_selector_dropdown.classList.toggle("opened");
	};
	inputValueSubmit = multiplier => {
		this.props.dispatch_filterAdd({ value: this.refs.qInput.value, multiplier: multiplier || this.state.qInput_multiplier, property: this.props.queryProperty });
		this.setState(constructInitialState(this.props));
	};
	render() {
		const multiplier = this.state.qInput_multiplier;
		let placeholder = "Search text...";
		if (this.props.queryProperty === "location") {
			placeholder = "Search city name...";
		}
		return (
			<Styled.Query
				className={"query_group" + (this.state.qInput_value ? " hasValue" : "")}
				innerRef={e => {
					this.refs.query_group = e;
				}}
			>
				<input
					className="query_input"
					placeholder={placeholder}
					ref="qInput"
					onChange={e => {
						this.inputValueChange(e);
					}}
					value={this.state.qInput_value}
					onKeyPress={e => {
						if ((e.charCode || e.keyCode) === 13) {
							this.inputValueSubmit();
						}
					}}
				/>
				<div className={"query_select selected_ " + (multiplier > 0 ? "positive" : "negative")}>
					<div className="dropdown" ref="query_selector_dropdown">
						<div
							className={"green " + (multiplier === 10 ? "selected" : "")}
							onClick={() => {
								this.inputMultiplierChange(10);
							}}
						>
							<span>+</span>
							<span>10</span>
						</div>
						<div
							className={"green " + (multiplier === 3 ? "selected" : "")}
							onClick={() => {
								this.inputMultiplierChange(3);
							}}
						>
							<span>+</span>
							<span>3</span>
						</div>
						<div
							className={"green " + (multiplier === 2 ? "selected" : "")}
							onClick={() => {
								this.inputMultiplierChange(2);
							}}
						>
							<span>+</span>
							<span>2</span>
						</div>
						<div
							className={"green " + (multiplier === 1 ? "selected" : "")}
							onClick={() => {
								this.inputMultiplierChange(1);
							}}
						>
							<span>+</span>
							<span>1</span>
						</div>
						<div
							className={"red " + (multiplier === -1 ? "selected" : "")}
							onClick={() => {
								this.inputMultiplierChange(-1);
							}}
						>
							<span>-</span>
							<span>1</span>
						</div>
						<div
							className={"red " + (multiplier === -2 ? "selected" : "")}
							onClick={() => {
								this.inputMultiplierChange(-2);
							}}
						>
							<span>-</span>
							<span>2</span>
						</div>
						<div
							className={"red " + (multiplier === -3 ? "selected" : "")}
							onClick={() => {
								this.inputMultiplierChange(-3);
							}}
						>
							<span>-</span>
							<span>3</span>
						</div>
						<div
							className={"red " + (multiplier === -10 ? "selected" : "")}
							onClick={() => {
								this.inputMultiplierChange(-10);
							}}
						>
							<span>-</span>
							<span>10</span>
						</div>
					</div>
					<div
						className="icon"
						onClick={() => {
							this.inputValueSubmit();
						}}
					>
						<span className="icon-plus-circle" />
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
	dispatch_filterAdd: filter => {
		dispatch(actions.filterAdd(filter));
	}
});
const ConnectedQuery = connect(mapStateToProps, mapDispatchToProps)(Query);

/*
	Components
*/
export default ConnectedQuery;
