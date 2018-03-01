import React from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render () {
    return (
      <div className="Nav">
        <h1>NAV</h1>
        <div className="Nav_section">
          <div><Link to='/'>home &raquo;</Link></div>
          <div><Link to='/about'>about &raquo;</Link></div>
        </div>
        <div className="Nav_section">
          <div><Link to='/search/samsung'>search "samsung" &raquo;</Link></div>
          <div><Link to='/search/apple'>search "apple" &raquo;</Link></div>
          <div><Link to='/search/vaco'>search "vaco" &raquo;</Link></div>
          <div><Link to='/search/google'>search "google" &raquo;</Link></div>
        </div>
      </div>
    )
  }
}