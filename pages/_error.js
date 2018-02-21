
import React from 'react'
import 'isomorphic-unfetch'

import Link from 'next/link'
import Nav from 'components/nav'

export default class MyPage extends React.Component {
  
  render () {
    return (
      <div>
      <h2>Page Not Found</h2>
      <Link prefetch href='/'><a>Go home &raquo;</a></Link>
      </div>
      // <h2>Count: {this.state.jobs_count}</h2>
      // <ListJobs {...this.state} />
    )
  }
}
