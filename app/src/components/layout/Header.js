import React from 'react'
import Nav from 'components/layout/Nav'
import SearchInput from 'components/search/Input'

export default class Header extends React.Component {
  render () {
    return (
      <div className="Header">

        <SearchInput />

        <h1>HEADER</h1>
        
        <Nav />
        

      </div>
    )
  }
}