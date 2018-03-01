import React, { Component } from 'react';
import 'isomorphic-unfetch'
import logo from 'assets/svg/react.svg';
import Nav from 'components/nav'
import * as Styled from './styled/Home.js';

class PageHome extends Component {
	static async getInitialProps ({ request, response, match, history, location, ...ctx }) {
		// eslint-disable-next-line no-undef
		const res = await fetch('http://localhost:1080/api/v1/jobs?text=')
		const json = await res.json()
		return { jobs_count:json.results, jobs:json.data||[] };
	}

  render() {
    return (
      <Styled.PageHome className="PageHome">
        <Nav />
        <div className="PageHome-header">
          <img src={logo} className="PageHome-logo" alt="logo" />
          <h2>Welcome to After.js</h2>
        </div>
        <p className="PageHome-intro">Found {this.props.jobs_count} jobs</p>
      </Styled.PageHome>
    );
  }
}

export default PageHome;
