/*jshint esversion: 6 */
import React from "react";
import Select from "react-select-plus";
import * as Styled from "./styled/SearchPlus.js";

export default class App extends React.Component {
	state = {
		selectedOption: {}
	};
	handleChange = selectedOption => {
		this.setState({ selectedOption });
	};
	render() {
		const options = [
			{
				value: 100,
				label: (
					<span>
						<span className="icon-ui-thumbs-up" />
						<span>100</span>
					</span>
				)
			},
			{
				value: 10,
				label: (
					<span>
						<span className="icon-ui-thumbs-up" />
						<span>10</span>
					</span>
				)
			},
			{
				value: 5,
				label: (
					<span>
						<span className="icon-ui-thumbs-up" />
						<span>5</span>
					</span>
				)
			},
			{
				value: 1,
				label: (
					<span>
						<span className="icon-ui-thumbs-up" />
						<span>1</span>
					</span>
				)
			}
		];
		const { selectedOption } = this.state;
		const value = selectedOption && selectedOption.value;

		return (
			<Styled.SearchPlus>
				<input type="text" placeholder="Search..." />
				<Select name="form-field-name" value={value} onChange={this.handleChange} options={options} />
			</Styled.SearchPlus>
		);
	}
}
