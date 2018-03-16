/*jshint esversion: 6 */
import React from "react";
import * as Styled from "./styled/Query.js";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";

// this will be useful to "reset" the setState
const constructInitialState = function() {
	return {
		qInput_value: "",
		qInput_multiplier: 1
	};
};

/* 
	Component 
*/
class Query extends React.Component {
	constructor(props) {
		super(props);
		this.state = constructInitialState();
	}
	componentDidMount() {
		// slight UX addition:
		setTimeout(() => {
			this.refs.qInput.focus();
		}, 300);
	}
	inputValueChange = e => {
		const value = e.target.value;
		// set value:
		this.setState({ qInput_value: value });
	};
	multiplierClick = multiplier => {
		// set value:
		this.setState({ qInput_multiplier: multiplier });
		// on "closing", second click, submit value
		if (this.refs.query_group.classList.contains("active") && this.refs.qInput.value) {
			this.inputValueSubmit(multiplier); // pass multiplier, because setState is Async, and doesnt change fast enough
		}
		// on "opening", initial click, open the dropdown
		this.refs.query_group.classList.toggle("active");
	};
	inputValueSubmit = multiplier => {
		// change it in multiplierClick, then call this to finalize, or just call this on its own, to send current value
		this.props.dispatch_filterAdd({ value: this.refs.qInput.value, multiplier: multiplier || this.state.qInput_multiplier, property: this.props.queryProperty });
		this.setState(constructInitialState(this.props));
	};
	render() {
		// value + multiplier
		const multiplier = this.state.qInput_multiplier;
		let placeholder = this.props.placeholder || "Search description...";
		return (
			<Styled.Query
				className={"query_group " + (this.state.qInput_value ? " hasValue " : "")}
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
				<div className={"query_select selected_" + (multiplier > 0 ? "positive" : "negative")}>
					<div
						className="overlay"
						onClick={() => {
							this.refs.query_group.classList.remove("active");
						}}
					/>
					<div className="dropdown">
						<div
							className={"green " + (multiplier === 10 ? "selected" : "")}
							onClick={() => {
								this.multiplierClick(10);
							}}
						>
							<span className="icon-ui-thumbs-up" />
							<span>10</span>
						</div>
						<div
							className={"green " + (multiplier === 3 ? "selected" : "")}
							onClick={() => {
								this.multiplierClick(3);
							}}
						>
							<span className="icon-ui-thumbs-up" />
							<span>3</span>
						</div>
						<div
							className={"green " + (multiplier === 2 ? "selected" : "")}
							onClick={() => {
								this.multiplierClick(2);
							}}
						>
							<span className="icon-ui-thumbs-up" />
							<span>2</span>
						</div>
						<div
							className={"green " + (multiplier === 1 ? "selected" : "")}
							onClick={() => {
								this.multiplierClick(1);
							}}
						>
							<span className="icon-ui-thumbs-up" />
							<span>1</span>
						</div>
						<div
							className={"red " + (multiplier === -1 ? "selected" : "")}
							onClick={() => {
								this.multiplierClick(-1);
							}}
						>
							<span className="icon-ui-thumbs-down" />
							<span>-1</span>
						</div>
						<div
							className={"red " + (multiplier === -2 ? "selected" : "")}
							onClick={() => {
								this.multiplierClick(-2);
							}}
						>
							<span className="icon-ui-thumbs-down" />
							<span>-2</span>
						</div>
						<div
							className={"red " + (multiplier === -3 ? "selected" : "")}
							onClick={() => {
								this.multiplierClick(-3);
							}}
						>
							<span className="icon-ui-thumbs-down" />
							<span>-3</span>
						</div>
						<div
							className={"red " + (multiplier === -10 ? "selected" : "")}
							onClick={() => {
								this.multiplierClick(-10);
							}}
						>
							<span className="icon-ui-thumbs-down" />
							<span>-10</span>
						</div>
					</div>
					<div
						className="icon"
						onClick={() => {
							this.inputValueSubmit();
						}}
					>
						<span className="icon-top-add" />
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
