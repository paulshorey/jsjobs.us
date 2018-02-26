import React from 'react'
import 'isomorphic-unfetch'
import Nav from 'components/nav'

// this **** is NOT ok:
const getAPIHostname = function(){
	if (typeof window === "undefined") {
		console.log('getAPIHostname => http://localhost:1080');
		return "http://localhost:1080";
	} else {
		if (window.location.hostname==="localhost") {
			console.log("getAPIHostname => "+window.location.protocol+"//"+window.location.hostname+":1080");
			return window.location.protocol+"//"+window.location.hostname+":1080";
		} else {
			console.log("getAPIHostname => "+window.location.protocol+"//"+window.location.hostname);
			return window.location.protocol+"//"+window.location.hostname;
		}
	}
};

export default class MyPage extends React.Component {
	static async getInitialProps (params) {
		// eslint-disable-next-line no-undef
		const res = await fetch(getAPIHostname()+'/api/v1/jobs?text='+(params.query.search||''))
		const json = await res.json()
		return { jobs_count:json.results, jobs:json.data };
	}
  
  render () {
	// console.log("\search render", this.props, "\n");
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
		  <h2>Search "{this.props.url.query.search}" results: {this.props.jobs_count}</h2>
		  <div>
			{Jobs}
		  </div>
		</div>
	)
  }
}