
import React from 'react'
import { Link } from 'routes'

export default class Nav extends React.Component {
  render () {
    return (
      <div className="nav">
        <img src="/static/images/banner.jpg" />
        <div className="nav_section">
          {/* <div><Link route=''>home &raquo;</Link></div> */}
          <div><Link route='about'>about &raquo;</Link></div>
        </div>
        {/* <div className="nav_section">
          <div><Link href="/">&laquo; go home</Link></div>
          <div><Link href='/about'>about &raquo;</Link></div>
          <div><Link href='/adsfdfasdf'>asdffdfasdf &raquo;</Link></div>
        </div>
    */}
        <div className="nav_section">
          <div><Link prefetch route='/search_static/react'>search_static "react" &raquo;</Link></div>
          <div><Link prefetch route='/search_static/node.js'>search_static "node.js" &raquo;</Link></div>
          <div><Link prefetch route='/search_static/whatever'>search_static "whatever" &raquo;</Link></div>
          <div><Link route='/search_static/js'>search_static "js" &raquo;</Link></div>
        </div>
        <div className="nav_section">
          <div><Link route='/search_server/react'>search_server "react" &raquo;</Link></div>
          <div><Link route='/search_server/node.js'>search_server "node.js" &raquo;</Link></div>
          <div><Link route='/search_server/whatever'>search_server "whatever" &raquo;</Link></div>
        </div>
      {/*
        <div className="nav_section">
          <div><Link href='/search_lazy?q=react'>search_lazy "react" &raquo;</Link></div>
          <div><Link href='/search_lazy?q=node.js'>search_lazy "node.js" &raquo;</Link></div>
          <div><Link href='/search_lazy?q=whatever'>search_lazy "whatever" &raquo;</Link></div>
        </div> */}
      </div>
    )
  }
}