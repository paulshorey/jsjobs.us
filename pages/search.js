import React from 'react'
import 'isomorphic-unfetch'

import Link from 'next/link'
import Nav from 'components/nav'

export default class MyPage extends React.Component {

  render () {
    var Jobs = [];
    this.props.url.query.data.forEach(function(job,i){
      Jobs.push(
        <div key={job._id}>
          <div>{job.text}</div>
          <sup>{job.location}</sup>
        </div>
      );
    });

    return (
        <div>
          <Nav />
          <h2>SEARCH: {this.props.jobs_count}</h2>
          <div>
            {Jobs}
          </div>
          <Link prefetch href='/javascript'><a>&laquo; go back home</a></Link>
        </div>
    )
  }
}
