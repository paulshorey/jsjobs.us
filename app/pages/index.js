import React from 'react'
import 'isomorphic-unfetch'
import { Link } from 'routes'

import Nav from 'components/nav'

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render () {
    return (
      <div>
        <Nav />
        <h2>Home page</h2>
        <p>Next.js has {this.props.stars} ⭐️ stars</p>
      </div>
    )
  }
}
