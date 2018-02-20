
import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'

import Nav from 'components/nav'

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://api.paulshorey.com/v1/jobs/all?location=')
    const json = await res.json()
    return { jobs_count:json.results, jobs:json.data }
  }

  render () {
    var Jobs = [];
    this.props.jobs.forEach(function(job,i){
      Jobs.push(
        <div key={job._id}>
          <p>{job.text}</p>
        </div>
      );
    });
    return (
      <div>
        <Nav />
        <div>
          <p>Found {this.props.jobs_count} results:</p>
          <Link prefetch href='/preact'><a>Reverse &raquo;</a></Link>
        </div>
        <div>
          {Jobs}
        </div>
      </div>
    )
  }
}
