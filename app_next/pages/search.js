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
getAPIHostname();

export default class MyPage extends React.Component {
	constructor(){
		super();
		this.state = {
			jobs: [],
			jobs_count: 0
		}
	}

	static async getInitialProps (params) {
		console.log('search params',params);
		// eslint-disable-next-line no-undef
		const res = await fetch(getAPIHostname()+'/api/v1/jobs?text='+(params.query.search||''))
		const json = await res.json()
		return { jobs_count:json.results||0, jobs:json.data||[] };
	}
  
  render () {
		// this is NOT an alternative for this.setState, but a way to use values from getInitialProps() 
		this.state = Object.assign(this.state, this.props);
		// get on with it...
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
				<h2>Search "{this.state.url.query.search}" results: {this.state.jobs_count}</h2>
				<div>
				{Jobs}
				</div>
			</div>
		)
  }
}