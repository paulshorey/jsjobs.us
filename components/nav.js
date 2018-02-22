
import React from 'react'
import Link from 'components/activeLink'

export default class Nav extends React.Component {
  render () {
    return (
      <div className="nav">
        <img src="/static/images/banner.jpg" />
        <div className="nav_section">
          <div><Link href="/">&laquo; go home</Link></div>
          <div><Link href='/about'>about &raquo;</Link></div>
          <div><Link href='/adsfdfasdf'>asdffdfasdf &raquo;</Link></div>
        </div>
        <div className="nav_section">
          <div><Link href='/search/react'>search "react" &raquo;</Link></div>
          <div><Link href='/search/node.js'>search "node.js" &raquo;</Link></div>
          <div><Link href='/search/whatever'>search "whatever" &raquo;</Link></div>
        </div>
        <div className="nav_section">
          <div><Link href='/search_lazy?q=react'>search_lazy "react" &raquo;</Link></div>
          <div><Link href='/search_lazy?q=node.js'>search_lazy "node.js" &raquo;</Link></div>
          <div><Link href='/search_lazy?q=whatever'>search_lazy "whatever" &raquo;</Link></div>
        </div>
      </div>
    )
  }
}