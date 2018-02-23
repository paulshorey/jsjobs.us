import React from 'react'
import 'isomorphic-unfetch'

import Nav from 'components/nav'

export default class MyPage extends React.Component {
    // static async getInitialProps () {
    //     // eslint-disable-next-line no-undef
    //     const res = await fetch('https://api.github.com/repos/zeit/next.js')
    //     const json = await res.json()
    //     return { stars: json.stargazers_count }
    // }
    static async getInitialProps (params) {
        console.log("\nsearch_static getInitialProps", params, "\n");
        // eslint-disable-next-line no-undef
        const res = await fetch('http://localhost:3000/api/all?text='+(params.query.search||''))
        const json = await res.json()
        return { jobs_count:json.results, jobs:json.data };
    }
    // async componentWillMount () {
    //     console.log("\nsearch_static componentWillMount", this.props, "\n");
    //     // eslint-disable-next-line no-undef
    //     const res = await fetch('http://localhost:3000/api/all?location=')
    //     const json = await res.json()
    //     const data = { jobs_count:json.results, jobs:json.data };
    //     // this.setState(data);
    // }
  
  render () {
    console.log("\nsearch_static render", this.props, "\n");
    var Jobs = [];
    if (this.props && this.props.jobs) {
      this.props.jobs.forEach(function(job,i){
        Jobs.push(
          <div key={job._id}>
            <div>{job.text}</div>
            <sup>{job.location}</sup>
          </div>
        );
      });
    }

    return (
        <div>
          <Nav />
          <h2>Search_static... Count: {this.props.jobs_count}</h2>
          <div>
            {Jobs}
          </div>
        </div>
    )
  }
}