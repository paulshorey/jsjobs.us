import React, { Component } from "react";
import * as Styled from "./styled/Results.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";
/* components */
import SearchQuery from "components/search/Query";
import SearchLinks from "components/search/Links";
import SearchFilters from "components/search/Filters";
/*
	lib
*/
const sort_items_object_to_array = (items_object, filters_array) => {
	/*
		filter the filters (needs refactor!)
	*/
	const filters = filters_array.map(filter => {
		filter.value = filter.value.replace(/ \| /g, "|");
		filter.value = filter.value.replace(/\?/g, "\\?");
		filter.value = filter.value.replace(/\+/g, "\\+");
		filter.value = filter.value.replace(/\]\\\+/g, "]+");
		filter.value = filter.value.replace(/\*/g, "\\*");
		filter.value = filter.value.replace(/\$/g, "\\$");
		return filter;
	});
	/*
		iterate items
	*/
	const items = [];
	for (let i in items_object) {
		let item = items_object[i];
		if (typeof item !== "object") {
			continue;
		}
		item._status = item._status || "new";
		item._rating = 1000;
		// use filters
		for (let fil in filters) {
			const filter = filters[fil];
			if (filter.multiplier) {
				var reg = RegExp("" + filter.value + "", "i");
				var match = reg.test(" " + item.location + " " + item.company + " " + item.name + " " + item.text + " ");
				if (match) {
					item._rating += filter.multiplier;
				}
			}
		}
		// except
		// if (item._status === this.props.items_status) {
		if (!filters.length || item._rating >= 1000 + filters.length) {
			items.push(item);
		}
		// }
	}
	// items.sort(function(a, b) {
	// 	return b.posted > a.posted;
	// });
	items.sort(function(a, b) {
		return b._rating > a._rating;
	});
	return items;
};
/* 
	component 
*/
class Results extends Component {
	state = {};
	componentDidMount() {
		this.props.dispatch(actions.my_items_status(this.props.items_status));
	}
	/*
		view
	*/
	render() {
		var area_key = this.props.area_key;
		var items_array = sort_items_object_to_array(this.props.items, this.props.filters);
		var results_length = /*Object.keys(this.props.items).length -*/ items_array.length;
		// make Array
		var Items = [];
		if (items_array.length) {
			var i = 0;
			// limit items on page - soon add pagination or auto-loading on scroll
			while (i < 100) {
				// item = current item
				const item = items_array[i];
				if (typeof item !== "object") {
					i++;
					continue;
				}
				// item.rating
				const rating = item._rating - 1000;
				let Rating = null;
				if (rating > 0) {
					Rating = (
						<b className="rating plus">
							<span className="icon-ui-thumbs-up" />
							{rating}
						</b>
					);
				}
				if (rating < 0) {
					Rating = (
						<b className="rating minus">
							<span className="icon-ui-thumbs-down" />
							{rating}
						</b>
					);
				}
				// add to view
				Items.push(
					<div key={item._id + i} className={"item status--" + item._status}>
						<b>
							<a href={item.link} target="_blank">
								{item.name}
							</a>
						</b>{" "}
						- {item.text} &nbsp;
						<div className="meta">
							<div className="rating">
								#{i} - {item._status}
							</div>
							<div className="rating">{Rating}</div>
							<div className="location">
								<a href={"https://www.google.com/maps/place/" + item.location + ""} target="_blank">
									<span className="icon-navigation" /> {item.location}
								</a>
							</div>
							<div className="company">
								<a href={"https://google.com/search?q=" + item.company + " company glassdoor"} target="_blank">
									{item.company}
								</a>
							</div>
							<div className="pills">
								<span
									className="pill status--applied"
									onClick={() => {
										// NOT immutable: immediately assigns to existing, rendered item - handle all immutability in Redux actions
										this.props.dispatch(actions.my_item_save(Object.assign({}, item, { _status: "applied" }), this.props.area_key));
									}}
								>
									<span className="icon-check" /> <span className="text">applied</span>
								</span>
								<span
									className="pill status--intrigued"
									onClick={() => {
										// NOT immutable: immediately assigns to existing, rendered item - handle all immutability in Redux actions
										this.props.dispatch(actions.my_item_save(Object.assign({}, item, { _status: "intrigued" }), this.props.area_key));
									}}
								>
									<span className="icon-ui-thumbs-up" /> <span className="text">intrigued</span>
								</span>
								<span
									className="pill status--ignored"
									onClick={() => {
										// NOT immutable: immediately assigns to existing, rendered item - handle all immutability in Redux actions
										this.props.dispatch(actions.my_item_save(Object.assign({}, item, { _status: "ignored" }), this.props.area_key));
									}}
								>
									<span className="icon-delete" /> <span className="text">ignored</span>
								</span>
							</div>
						</div>
					</div>
				);
				i++;
			}
		} else {
			Items.push(
				<div>
					<p>No results :(</p>
					<p>
						<Link to="/">Go back to homepage</Link>, and click some buttons!
					</p>
					<p>But, this functionality needs a lot of work! Please do check back in a week. Should be working then.</p>
				</div>
			);
		}
		return (
			<Styled.Results className={"Items " + (this.props.className || "")}>
				<div className="queries">
					<h1>This functionality needs a lot of work!</h1>
					<p>
						<Link to={"/in/" + this.props.my_area}>&laquo; back to search page</Link>
					</p>
				</div>
				<div className="content">{Items}</div>
			</Styled.Results>
		);
	}
}

/*
	Connect redux data
*/
const mapStateToProps = (data, ownProps) => {
	const filters = data.my.filters || [];
	const items = Object.assign({}, data.my.items);
	return {
		my_area: data.my.area_key,
		items,
		items_status: ownProps.items_status || "new",
		filters
	};
};
const ConnectedResults = connect(mapStateToProps)(withRouter(Results));

/*
	Components
*/
export default ConnectedResults;
