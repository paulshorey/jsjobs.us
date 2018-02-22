import React from 'react'
import 'isomorphic-unfetch'

import Link from 'next/link'
import Nav from 'components/nav'

export default class MyPage extends React.Component {

  render () {
    var Jobs = [];
    if (this.props.url && this.props.url.query && this.props.url.query.data) {
      this.props.url.query.data.forEach(function(job,i){
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
          <h2>FIND: {this.props.jobs_count}</h2>
          <Link prefetch href='/'>&laquo; go home</Link>
          <div>
            {Jobs}
          </div>
        </div>
    )
  }
}