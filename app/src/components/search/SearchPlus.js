/*jshint esversion: 6 */
import React from "react";
import Select from "react-select-plus";
import * as Styled from "./styled/SearchPlus.js";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedOption: 1
		};
	}
	handleChange = selectedOption => {
		this.setState({ selectedOption });
	};
	render() {
		const options = [100, 10, 1, -1, -10, -100];
		const Options = [];
		options.forEach(value => {
			Options.push(
				<span
					key={value}
					onClick={() => {
						console.log("label clicked");
						this.setState({ selectedOption: value });
					}}
				>
					<span className={"icon-ui-thumbs-" + (value > 0 ? "up" : "down")} />
					<span>{value}</span>
				</span>
			);
		});
		return (
			<Styled.SearchPlus>
				<input type="text" placeholder="Search..." />
				<span>{this.state.selectedOption}</span>
				<span>
					<span className="dropdown">{Options}</span>
				</span>
			</Styled.SearchPlus>
		);
	}
}
