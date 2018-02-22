
import React from 'react'
import Link from 'components/activeLink'

export default class Nav extends React.Component {
  render () {
    return (
      <div>
        <img src="/static/images/banner.jpg" />
        <p>
          <div><Link href="/"><a>&laquo; go home</a></Link></div>
          <div><Link href='/search/react'><a>search "react" &raquo;</a></Link></div>
          <div><Link href='/search/node.js'><a>search "node.js" &raquo;</a></Link></div>
          <div><Link href='/search/whatever'><a>search "whatever" &raquo;</a></Link></div>
          <div><Link href='/adsfdfasdf'><a>asdffdfasdf &raquo;</a></Link></div>
          <div><Link href='/about'><a>about &raquo;</a></Link></div>
        </p>
      </div>
    )
  }
}