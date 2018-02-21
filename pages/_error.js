
import React from 'react'
import 'isomorphic-unfetch'

import Link from 'next/link'
import Nav from 'components/nav'
import ListJobs from 'components/listJobs'

export default class MyPage extends React.Component {
  constructor(){
    super();
    this.state = {
      jobs_count: 0,
      jobs: []
    }
  }
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:1080/v1/jobs/all?location=')
    const json = await res.json()
    const data = { jobs_count:json.results };
    // this.setState(data);
    return data;
  }

  render () {
    return (
      <div>
      <h2>ERROR {this.props.jobs_count}</h2>
      <Link prefetch href='/index_2'><a>Next page &raquo;</a></Link>
      </div>
      // <h2>Count: {this.state.jobs_count}</h2>
      // <ListJobs {...this.state} />
    )
  }
}
