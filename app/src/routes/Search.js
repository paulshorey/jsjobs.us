import React, { Component } from 'react';
import 'isomorphic-unfetch'
import logo from 'assets/svg/react.svg';
import Nav from 'components/nav'
import * as Styled from './styled/Search';
import { getAPIHostname } from 'modules/getAPI';

class PageSearch extends Component {
	static async getInitialProps ({ request, response, match, history, location, ...ctx }) {
		// eslint-disable-next-line no-undef
		const res = await fetch(getAPIHostname()+'/api/v1/jobs?text='+match.params.search)
		const json = await res.json()
		return { jobs_count:json.results, jobs:json.data||[] };
	}

  render() {
		// get on with it...
		var Jobs = [];
		if (this.props && this.props.jobs) {
			this.props.jobs.forEach(function(job,i){
			Jobs.push(
				<div key={job._id}>
				<div>{job.text}</div>
				<sup>{job.location}</sup>
				</div>
			);
			});
		}
		return (
			<Styled.PageSearch>
				<Nav />
				<h2>Search "{this.props.match.params.search}" results: {this.props.jobs_count}</h2>
				<div>
				{Jobs}
				</div>
			</Styled.PageSearch>
    )
  }
}

export default PageSearch;
