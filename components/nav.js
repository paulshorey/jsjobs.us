
import React from 'react'
import { Link } from 'routes'

export default class Nav extends React.Component {
  render () {
    return (
      <div className="nav">
        <div className="nav_section">
          <div><Link prefetch route='/'><a>home &raquo;</a></Link></div>
          <div><Link prefetch route='about'><a>about &raquo;</a></Link></div>
        </div>
        <div className="nav_section">
          <div><Link prefetch route='/search/react'><a>search "react" &raquo;</a></Link></div>
          <div><Link prefetch route='/search/node.js'><a>search "node.js" &raquo;</a></Link></div>
          <div><Link prefetch route='/search/whatever'><a>search "whatever" &raquo;</a></Link></div>
          <div><Link prefetch route='/search/js'><a>search "js" &raquo;</a></Link></div>
        </div>
      </div>
    )
  }
}