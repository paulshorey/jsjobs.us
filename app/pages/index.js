import React from 'react'
import 'isomorphic-unfetch'
import { Link } from 'routes'

export default class MyPage extends React.Component {
  static async getInitialProps (context) {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render () {
    return (
      <div>
        <h2>Home page</h2>
        <p>Welcome!</p>
        <p>Next.js has {this.props.stars} ⭐️ stars</p>
      </div>
    )
  }
}
