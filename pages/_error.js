
import React from 'react'
import 'isomorphic-unfetch'

import Nav from 'components/nav'

export default class MyPage extends React.Component {
  
  render () {
    return (
      <div>
        <Nav />
        <h2>Page Not Found</h2>
      </div>
      // <h2>Count: {this.state.jobs_count}</h2>
      // <ListJobs {...this.state} />
    )
  }
}
