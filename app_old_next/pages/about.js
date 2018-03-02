import React from 'react'
import 'isomorphic-unfetch'

import Nav from 'components/nav'

export default class MyPage extends React.Component {
  render () {
    return (
        <div>
          <Nav />
          <h2>About us...</h2>
          <p>
            Got it working! SSR SEO + SPA routing with dynamic data
          </p>
        </div>
    )
  }
}