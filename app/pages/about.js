import React from 'react'
import 'isomorphic-unfetch'

export default class MyPage extends React.Component {
  render () {
    return (
        <div>
          <h2>About us...</h2>
          <p>
            Got it working! SSR SEO + SPA routing with dynamic data
          </p>
        </div>
    )
  }
}
