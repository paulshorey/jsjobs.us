import React from 'react'
import 'isomorphic-unfetch'

import Nav from 'components/nav'

export default class MyPage extends React.Component {

  render () {
    console.log(this.props.url.query.serverData);
    var Jobs = [];
    if (this.props.url && this.props.url.query.serverData && this.props.url.query.serverData.data) {
      this.props.url.query.serverData.data.forEach(function(job,i){
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
          <h2>Search_server... Results: {this.props.url.query.serverData.results}</h2>
          <div>
            {Jobs}
          </div>
        </div>
    )
  }
}
