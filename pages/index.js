import React from 'react'

import Nav from 'components/nav'

export default class MyPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jobs_count: 0,
      jobs: []
    }
  }
  async componentWillMount () {
    // eslint-disable-next-line no-undef
    const res = await fetch('/api/all?location=')
    const json = await res.json()
    const data = { jobs_count:json.results, jobs:json.data };
    this.setState(data);
  }

  render () {
    var Jobs = [];
    if (this.state && this.state.jobs) {
      this.state.jobs.forEach(function(job,i){
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
          <h2>Index... Count: {this.state.jobs_count}</h2>
          <div>
            {Jobs}
          </div>
        </div>
    )
  }
}
