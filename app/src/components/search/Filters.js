/*jshint esversion: 6 */
import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Filters.js";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";
/* 
	Component 
*/
class Filters extends Component {
	render() {
		var filters = this.props.area.filters;
		// filter the filters
		var Filters = [];
		for (const fil in filters) {
			const filter = filters[fil];
			// const FilterMultipliers = [];
			// const FilterOperator = filter.multiplier > 0 ? <span className="icon-plus" /> : <span className="icon-minus" />;
			// console.log("fil", fil, FilterOperator);
			// let m = 0;
			// while (m < filter.multiplier) {
			// 	FilterMultipliers.push(<b key={"op" + m}>{FilterOperator}</b>);
			// 	m++;
			// }
			// filter.multiplier = parseInt(filter.multiplier);
			Filters.push(
				<div key={fil} className={"filter" + (filter.multiplier > 0 ? " plus" : " minus")}>
					{filter.multiplier !== 0 ? (
						<span>
							<span className="value">
								<i>"</i>
								<b>
									{filter.value
										.replace(/\\\\/g, "\\")
										.replace(/\\\\/g, "")
										.replace(/\|/g, " | ")}
								</b>
								<i>"</i>
							</span>
							<span className="multiplier_text">
								{filter.multiplier > 0 ? <span className="icon-ui-thumbs-up" /> : <span className="icon-ui-thumbs-down" />}
								<b>{Math.abs(filter.multiplier)}</b>
							</span>
							<span
								className="delete icon-delete"
								onClick={() => {
									this.props.dispatch(actions.my_filter_remove(filter, this.props.area_key));
								}}
							/>
						</span>
					) : (
						<span className="value example">{filter.value}</span>
					)}
				</div>
			);
		}
		return (
			<Styled.Filters>
				<div className="filters">{Filters}</div>
				{/* <p>
					<Link to="/">
						LA (Southern California) &nbsp;&nbsp;&nbsp;<span className="icon-delete ui-icon-delete" />
					</Link>
				</p> */}
			</Styled.Filters>
		);
	}
}
const mapStateToProps = (data, ownProps) => {
	const data_area = data.areas[ownProps.area_key];
	return {
		area: {
			filters: data.my.filters.length ? data.my.filters : []
		}
	};
};
const ConnectedFilters = connect(mapStateToProps)(Filters);

/*
	Components
*/
export default ConnectedFilters;
