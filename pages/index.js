import React from 'react'
import 'isomorphic-unfetch'

import Nav from 'components/nav'

export default class MyPage extends React.Component {

  render () {
    return (
        <div>
          <Nav />
          <h2>Index page.</h2>
        </div>
    )
  }
}
