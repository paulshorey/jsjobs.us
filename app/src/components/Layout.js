import React from 'react'
import Header from 'components/layout/Header.js'
import Footer from 'components/layout/Footer.js'

export default class Layout extends React.Component {
  render () {
    return (
      <div className="Layout">
        <Header />
        {this.props.children||null}
        <Footer />
      </div>
    )
  }
}