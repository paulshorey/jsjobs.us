import React, { Component } from 'react';
import 'isomorphic-unfetch';
import * as Styled from './styled/Home.js';
import { getAPIHostname } from 'modules/getAPI';
import Layout from 'components/Layout.js';

class Home extends Component {
	static async getInitialProps ({ request, response, match, history, location, ...ctx }) {
		// eslint-disable-next-line no-undef
		const res = await fetch(getAPIHostname()+'/api/v1/jobs?text=')
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
      <Layout>
        <Styled.Home>
          <h2>Home search="{this.props.match.params.search}" results: {this.props.jobs_count}</h2>
          <div>
          {Jobs}
          </div>
        </Styled.Home>
      </Layout>
    )
  }
}

export default Home;
