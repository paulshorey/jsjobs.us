import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Results.js";
import { withRouter } from "react-router";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";
/* components */
import AreaLinks from "components/search/AreaLinks";
import SearchFilters from "components/search/Filters";
import SearchQuery from "components/search/Query";
/* 
	Component 
*/
class Results extends Component {
	rateJobs = jobs => {
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
			iterate results
		*/
		jobs = jobs.map(job => {
			job._status = job._status || "new";
			job._rating = 1000;
			// use filters
			for (let fil in filters) {
				const filter = filters[fil];
				if (filter.multiplier) {
					var reg = RegExp("" + filter.value + "", "i");
					var match = reg.test(" " + job.location + " " + job.company + " " + job.name + " " + job.text + " ");
					if (match) {
						job._rating += filter.multiplier;
					}
				}
			}

			return job;
		});
		jobs.sort(function(a, b) {
			return b._rating - a._rating;
		});
		return jobs;
	};
	/*
		view
	*/
	render() {
		var area_key = this.props.area_key;
		var rated_jobs = this.rateJobs(this.props.jobs);
		// make Array
		var Jobs = [];
		if (rated_jobs) {
			var i = 0;
			// limit results on page - soon add pagination or auto-loading on scroll
			while (i < 100) {
				// job = current item
				var job = rated_jobs[i];
				if (typeof job !== "object") {
					break;
				}
				// job.rating
				const rating = job._rating - 1000;
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
				// job.etc
				// let locArr = job.location.split(",");
				// job.location = locArr.reduce((a, b) => {
				// 	if (a.trim().length > 4 && a.length > b.length && !/[0-9]+/.test(a)) {
				// 		return a;
				// 	} else {
				// 		return b;
				// 	}
				// });
				// add to view
				Jobs.push(
					<div key={job._id + i} className={"result " + (i === 0 ? " first" : "")}>
						<b>
							<a href={job.link} target="_blank">
								{job.name}
							</a>
						</b>{" "}
						- {job.text} &nbsp;
						<div className="meta">
							<span className="rating">{Rating}</span>
							<span className="location">
								<a href={"https://www.google.com/maps/place/" + job.location + ""} target="_blank">
									<span className="icon-navigation" /> {job.location}
								</a>
							</span>
							<span className="company">
								<a href={"https://google.com/search?q=" + job.company + " company glassdoor"} target="_blank">
									{job.company}
								</a>
							</span>
							<span className="pills">
								<span className="pill">
									<span className="icon-check" /> <span className="text">applied</span>
								</span>
								<span className="pill">
									<span className="icon-ui-thumbs-up" /> <span className="text">intrigued</span>
								</span>
								<span className="pill">
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
			<Styled.Results>
				<div className="queries">
					<div className="queries_content">
						<AreaLinks area_key={area_key} />
						<SearchQuery placeholder={"Search " + rated_jobs.length + " results..."} />
						<p className="moreOptions">...</p>
						<SearchFilters />
					</div>
				</div>
				<div className="results">{Jobs}</div>
			</Styled.Results>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		filters: state.filters,
		areas: state.areas
	};
};
const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch_areaAddJobs: (jobs, area_key) => {
		dispatch(actions.areaAddJobs(jobs, area_key));
	}
});
const ConnectedResults = connect(mapStateToProps, mapDispatchToProps)(withRouter(Results));

/*
	Components
*/
export default ConnectedResults;
