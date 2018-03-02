import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Search.js";
import { getAPIHostname } from "lib/getAPI";
import Layout from "components/Layout.js";

const query = {
	start: 0,
	limit: 50
};
const queryAdvance = function() {
	query.start += query.limit;
};

class Search extends Component {
	static async getInitialProps({ request, response, match, history, location, ...ctx }) {
		const res = await fetch(getAPIHostname() + `/api/v1/jobs?text=${match.params.search}&start=${query.start}&limit=${query.limit}`);
		const json = await res.json();
		return { jobs_count: json.results, jobs: json.data || [] };
	}
	constructor() {
		super();
		this.state = {
			jobs: []
		};
	}

	async componentWillMount() {
		queryAdvance();
		const res = await fetch(getAPIHostname() + `/api/v1/jobs?text=&start=${query.start}&limit=${query.limit}`);
		const json = await res.json();
		this.setState({ jobs: json.data || [] });
	}

	render() {
		var jobs = (this.props.jobs || []).concat(this.state.jobs || []);
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
			<Layout>
				<Styled.Search>
					<h2>
						Search "{this.props.match.params.search}" results: {jobs.length}
					</h2>
					<div>{Jobs}</div>
				</Styled.Search>
			</Layout>
		);
	}
}

export default Search;
