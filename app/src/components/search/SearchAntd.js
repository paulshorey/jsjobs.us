/*jshint esversion: 6 */
import React from "react";
import * as Styled from "./styled/SearchAntd.js";

/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";

/* form */
import { Input, Select, Icon } from "antd";
const Option = Select.Option;

/* component */
const constructInitialState = function(props) {
	return {
		qInput_value: "",
		qInput_multiplier: props.queryProperty === "location" ? 3 : 1
	};
};
class SearchPlus extends React.Component {
	constructor(props) {
		super(props);
		this.state = constructInitialState(props);
	}
	render() {
		const multiplier = this.state.qInput_multiplier;
		// let placeholder = "Search description...";
		// if (this.props.queryProperty === "location") {
		// 	placeholder = "Search city name...";
		// } else if (this.props.queryProperty === "title") {
		// 	placeholder = "Search title...";
		// }
		const selectAfter = (
			<Select defaultValue=".com" style={{ width: 80 }}>
				<Option value=".com">.com</Option>
				<Option value=".jp">.jp</Option>
				<Option value=".cn">.cn</Option>
				<Option value=".org">.org</Option>
			</Select>
		);
		return (
			<div>
				<div style={{ marginBottom: 16 }}>
					<Input addonAfter={selectAfter} defaultValue="mysite" />
				</div>
			</div>
		);
	}
}

export default SearchPlus;
