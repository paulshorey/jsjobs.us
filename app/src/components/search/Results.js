import React, { Component } from "react";
import * as Styled from "./styled/Results.js";
import { withRouter } from "react-router";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";
/* components */
import SearchQuery from "components/search/Query";
import SearchLinks from "components/search/Links";
import SearchFilters from "components/search/Filters";
/* 
	component 
*/
class Results extends Component {
	state = {};
	rateItems = items => {
		/*
			filter the filters (needs refactor?)
		*/
		const filters = Object.assign({}, this.props.filters);
		for (let fil in filters) {
			const filter = filters[fil];
			let value = filter.value;
			value = value.replace(/ \| /g, "|");
			value = value.replace(/\?/g, "\\?");
			value = value.replace(/\+/g, "\\+");
			value = value.replace(/\]\\\+/g, "]+");
			value = value.replace(/\*/g, "\\*");
			value = value.replace(/\$/g, "\\$");
			filters[fil].value = value;
		}
		/*
			iterate items
		*/
		items = items.map(item => {
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

			return item;
		});
		items.sort(function(a, b) {
			return b._rating - a._rating;
		});
		return items;
	};
	/*
		view
	*/
	render() {
		var area_key = this.props.area_key;
		var rated_items = this.rateItems(this.props.items);
		// make Array
		var Items = [];
		if (rated_items) {
			var i = 0;
			// limit items on page - soon add pagination or auto-loading on scroll
			while (i < 100) {
				// item = current item
				var item = rated_items[i];
				if (typeof item !== "object") {
					break;
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
					<div key={item._id + i} className={"item " + (i === 0 ? " first" : "")}>
						<b>
							<a href={item.link} target="_blank">
								{item.name}
							</a>
						</b>{" "}
						- {item.text} &nbsp;
						<div className="meta">
							<span className="rating">{Rating}</span>
							<span className="location">
								<a href={"https://www.google.com/maps/place/" + item.location + ""} target="_blank">
									<span className="icon-navigation" /> {item.location}
								</a>
							</span>
							<span className="company">
								<a href={"https://google.com/search?q=" + item.company + " company glassdoor"} target="_blank">
									{item.company}
								</a>
							</span>
							<span className="pills">
								<span
									className="pill"
									onClick={() => {
										console.log("item", item);
										const addItem = Object.assign(item, { status: "applied" });
										console.log("addItem", addItem);
										this.props.dispatch(actions.area_item_my(addItem, this.props.area_key));
									}}
								>
									<span className="icon-check" /> <span className="text">applied</span>
								</span>
								<span
									className="pill"
									onClick={() => {
										this.props.dispatch(actions.area_item_my(Object.assign(item, { status: "intrigued" }), this.props.area_key));
									}}
								>
									<span className="icon-ui-thumbs-up" /> <span className="text">intrigued</span>
								</span>
								<span
									className="pill"
									onClick={() => {
										this.props.dispatch(actions.area_item_my(Object.assign(item, { status: "ignored" }), this.props.area_key));
									}}
								>
									<span className="icon-delete" /> <span className="text">ignored</span>
								</span>
							</span>
						</div>
					</div>
				);
				i++;
			}
		}
		return (
			<Styled.Results className={"Items " + (this.props.className || "")}>
				<div className="queries">
					<SearchLinks area_key={this.props.area_key} />
					<SearchQuery area_key={this.props.area_key} expanded={this.state.searchQueryExpanded} placeholder={"Search " + rated_items.length + " items..."} />
					<SearchFilters area_key={this.props.area_key} />
					<div className="moreOptions" ref="moreOptions">
						<div className="moreOptions_content">
							<p>
								Tip: use RegEx in search term. For example: <br />"<b>[^a-zA-Z]+C[^a-zA-Z]+</b>" or "<b>java[^s]+ | JSP</b>"
							</p>
							<p>Then, choose a +/- thumbs up/down value, to weigh its importance.</p>
						</div>
						<p
							className="moreOptions_link"
							onClick={e => {
								this.refs.moreOptions.classList.toggle("active");
								this.setState({ searchQueryExpanded: !this.state.searchQueryExpanded });
							}}
						>
							...
						</p>
					</div>
				</div>
				<div className="content">{Items}</div>
			</Styled.Results>
		);
	}
}

const mapStateToProps = (data, ownProps) => {
	const myItems = data.my_areas[ownProps.area_key].items.length ? data.my_areas[ownProps.area_key].items : [];
	const myFilters = data.my_areas[ownProps.area_key].filters.length ? data.my_areas[ownProps.area_key].filters : [];
	const whatFilters = data.search_areas[ownProps.area_key].filters.length ? data.search_areas[ownProps.area_key].filters : [];
	// lets not send 1000s of initial results through Redux, but pass directly from fetch in page to props items={items}
	// then whatever the user edits or clicks will be added to myItems
	return {
		items: ownProps.items,
		filters: whatFilters
	};
};
const ConnectedResults = connect(mapStateToProps)(withRouter(Results));

/*
	Components
*/
export default ConnectedResults;
