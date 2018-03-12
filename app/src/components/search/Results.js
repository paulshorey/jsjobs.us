/*jshint esversion: 6 */
import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Results.js";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";
/* components */
import SearchSelect from "components/search/SelectLink";
import SearchQuery from "components/search/Query";
import SearchFilters from "components/search/Filters";
/* 
	Component 
*/
class Results extends Component {
	async componentDidMount() {
		const in_area = this.props.area || "us";
		// CDN => data
		// API => json.data
		const jobsUrl = `https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/${in_area}.json`; // Cloudfront
		const jobsUrl_local = `http://localhost:1080/api/v1/jobs/${in_area}.json`; // local API
		try {
			const res = await fetch(jobsUrl);
			const data = await res.json();
			// console.log("componentDidMount fetched " + data.length + " results from " + jobsUrl);
			this.props.dispatch_jobsAdd(data || []);
		} catch (e) {
			// console.error("componentDidMount fetch failed: " + jobsUrl + "");
			try {
				const res = await fetch(jobsUrl_local);
				const json = await res.json();
				// console.log("componentDidMount fetched " + json.data.length + " results from " + jobsUrl_local);
				this.props.dispatch_jobsAdd(json.data || []);
			} catch (e) {
				// console.error("componentDidMount fetch failed: " + jobsUrl_local + "");
				this.props.dispatch_jobsAdd([]);
			}
		}
	}

	rateJobs = jobs => {
		// filter the filters (needs refactor?)
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
		// iterate results
		jobs = jobs.slice(0, 8);
		jobs = jobs.map(job => {
			job._status = job._status || "new";
			job._rating = 1000;
			// use filters
			for (let fil in filters) {
				const filter = filters[fil];
				if (filter.multiplier) {
					var reg = RegExp("" + filter.value + "", "i");
					var match = reg.test(" " + job.name + " " + job.text + " ");
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
		jobs = jobs.slice(0, 100);
		return jobs;
	};
	renderResultsCount = () => {
		if (this.props.jobs.length !== 0 && this.props.jobs.length !== 50) {
			return <span>{this.props.jobs.length}</span>;
		} else {
			return null;
		}
	};
	render() {
		var jobs = this.props.jobs;
		if (jobs) {
			jobs = this.rateJobs(jobs);
		}
		// get on with it...
		var Jobs = [];
		if (jobs) {
			var i = 0;
			while (i < 100) {
				var job = jobs[i];
				if (typeof job !== "object") {
					break;
				}
				const rating = job._rating - 1000;
				let Rating = null;
				if (rating > 0) {
					Rating = (
						<b className="rating plus">
							<span className="icon-thumbs-up" />
							{rating}
						</b>
					);
				}
				if (rating < 0) {
					Rating = (
						<b className="rating minus">
							<span className="icon-thumbs-down" />
							{rating}
						</b>
					);
				}
				Jobs.push(
					<div key={job._id + i} className="result">
						<b>{job.name}</b> - {job.text} &nbsp;
						<div className="meta">
							<span className="location">{job.location}</span> &nbsp;
							{Rating}
							<span className="icon-x-circle" />
							<span className="icon-x-circle" />
							<span className="icon-x-circle" />
						</div>
					</div>
				);
				i++;
			}
		}
		return (
			<Styled.Results>
				<div className="queries">
					<h2 className="page-title">
						{" "}
						{/*this.renderResultsCount()*/} <span>Precise Search:</span>
					</h2>
					<div className="queries_content">
						<SearchSelect selectProperty="area" option={"/in/" + this.props.area} />
						<SearchQuery queryProperty="location" />
						<SearchQuery queryProperty="text" />
						<SearchFilters />
					</div>
				</div>
				<div className="results">{Jobs}</div>
			</Styled.Results>
		);
	}
}
const mapStateToProps = (state, ownProps) => ({
	jobs: state.jobs.length ? state.jobs : ownProps.jobs,
	filters: state.filters
});
const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch_jobsAdd: jobs => {
		dispatch(actions.jobsAdd(jobs));
	}
});
const ConnectedResults = connect(mapStateToProps, mapDispatchToProps)(Results);

/*
	Components
*/
export default ConnectedResults;
