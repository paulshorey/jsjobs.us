import React from 'react'
import 'isomorphic-unfetch'

import Link from 'next/link'
import Nav from 'components/nav'

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:3000/api/all?location=')
    const json = await res.json()
    const data = { jobs_count:json.results };
    return data;
  }

  render () {
    return (
        <div>
          <Nav />
          <h2>Test Index... Count: {this.props.jobs_count}</h2>
          <Link prefetch href='/javascript'><a>Search &quot;javascript&quot; &laquo;</a></Link>
        </div>
    )
  }
}
