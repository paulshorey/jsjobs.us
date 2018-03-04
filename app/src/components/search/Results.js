/*jshint esversion: 6 */
import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Results.js";
import Query from "./Query.js";
/* redux */
import { connect } from "react-redux";
import * as actions from "data/actions";

// const jobsUrl = "https://s3.us-east-2.amazonaws.com/jsjobsapi/api/v1/jobs.json"; // S3
const jobsUrl = "https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs.json"; // Cloudfront

/* 
	Component 
*/
class Results extends Component {
	constructor() {
		super();
		this.state = {
			jobs: []
		};
	}
	async componentWillMount() {
		const res = await fetch(jobsUrl);
		const data = await res.json();
		this.props.dispatch_jobsAdd(data || []);
	}

	filterJobs(jobs) {
		jobs = jobs.map(function(item) {
			item.status = item.status || "new";
			return item;
		});
		return jobs;
	}
	render() {
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
				<h2>Query:</h2>
				<Query />
				<h2> </h2>

				<h2>Results: {jobs.length}</h2>
				<div>{Jobs}</div>
			</Styled.Results>
		);
	}
}
const mapStateToProps = (state, ownProps) => ({
	jobs: state.jobs.length ? state.jobs : ownProps.jobs
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
