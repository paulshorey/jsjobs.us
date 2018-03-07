/*jshint esversion: 6 */
import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Results.js";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";
/* 
	Component 
*/
class Results extends Component {
	async componentDidMount() {
		// CDN => data
		// API => json.data
		const location_suffix = this.props.match.params.location ? "-" + this.props.match.params.location : "";
		const jobsUrl = `https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs${location_suffix}.json`; // Cloudfront
		const jobsUrl_local = `http://localhost:1080/api/v1/jobs${location_suffix}.json`; // local API
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

	constructor() {
		super();
		this.state = {
			jobs: []
		};
	}
	filterJobs(jobs) {
		jobs = jobs.map(function(item) {
			item.status = item.status || "new";
			return item;
		});
		return jobs;
	}
	render() {
		console.log("this.props.filters", this.props.filters);
		var jobs = this.props.jobs;
		jobs = this.filterJobs(jobs);
		// get on with it...
		var Jobs = [];
		if (jobs) {
			jobs.forEach(function(job, i) {
				Jobs.push(
					<div key={job._id}>
						<div>{job.text}</div>
						<sup>{job.location}</sup>
					</div>
				);
			});
		}
		return (
			<Styled.Results>
				<div>{Jobs}</div>
			</Styled.Results>
		);
	}
}
const mapStateToProps = (state, ownProps) => ({
	jobs: state.jobs.length ? state.jobs : ownProps.jobs,
	filters: state.filters.length ? state.filters : ownProps.filters
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
