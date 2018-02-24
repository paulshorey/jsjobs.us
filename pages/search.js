import React from 'react'
import 'isomorphic-unfetch'

import Nav from 'components/nav'

export default class MyPage extends React.Component {
    static async getInitialProps (params) {
        console.log("\nsearch_static getInitialProps", params, "\n");
        // eslint-disable-next-line no-undef
        const res = await fetch('http://localhost:1080/v1/jobs/all?text='+(params.query.search||''))
        const json = await res.json()
        return { jobs_count:json.results, jobs:json.data };
    }
  
  render () {
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
          <h2>Search_static... Count: {this.props.jobs_count}</h2>
          <div>
            {Jobs}
          </div>
        </div>
    )
  }
}