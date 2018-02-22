
import React from 'react'
import Link from 'next/link'

export default class Nav extends React.Component {
  render () {
    return (
      <div>
        <img src="/static/images/banner.jpg" />
        <p>
          <div><Link href='/'>&laquo; go home</Link></div>
          <div><Link prefetch href='/search/react'>search "react" &raquo;</Link></div>
          <div><Link prefetch href='/search/node.js'>search "node.js" &raquo;</Link></div>
          <div><Link prefetch href='/search/whatever'>search "whatever" &raquo;</Link></div>
          <div><Link prefetch href='/adsfdfasdf'>asdffdfasdf &raquo;</Link></div>
          <div><Link prefetch href='/about'>about &raquo;</Link></div>
        </p>
      </div>
    )
  }
}