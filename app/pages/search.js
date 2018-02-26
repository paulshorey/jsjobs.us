import React from 'react'
import 'isomorphic-unfetch'

import Nav from 'components/nav'

export default class MyPage extends React.Component {
    static async getInitialProps (params) {
        // console.log("\search getInitialProps", params, "\n");
        // eslint-disable-next-line no-undef
        const res = await fetch('http://localhost/api/v1/jobs?text='+(params.query.search||''))
        const json = await res.json()
        return { jobs_count:json.results, jobs:json.data };
    }
  
  render () {
    // console.log("\search render", this.props, "\n");
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
        <div>
          <Nav />
          <h2>Search "{this.props.url.query.search}" results: {this.props.jobs_count}</h2>
          <div>
            {Jobs}
          </div>
        </div>
    )
  }
}