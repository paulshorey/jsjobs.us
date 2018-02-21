import React from 'react'
import 'isomorphic-unfetch'

import Link from 'next/link'
import Nav from 'components/nav'

export default class MyPage extends React.Component {

  render () {
    return (
        <div>
          <Nav />
          <h2>About us...</h2>
          <Link prefetch href='/javascript'><a>Search &quot;javascript&quot; &laquo;</a></Link>
        </div>
    )
  }
}
