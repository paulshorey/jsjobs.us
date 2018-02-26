
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
        {/* <div className="nav_section">
          <div><Link prefetch route='/search/samsung'><a>search "samsung" &raquo;</a></Link></div>
          <div><Link prefetch route='/search/apple'><a>search "apple" &raquo;</a></Link></div>
          <div><Link prefetch route='/search/vaco'><a>search "vaco" &raquo;</a></Link></div>
          <div><Link prefetch route='/search/google'><a>search "google" &raquo;</a></Link></div>
        </div> */}
      </div>
    )
  }
}