import React, { Component } from "react";
import { Link } from "react-router-dom";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";
import SearchSelect from "components/search/SelectLink";

class Search extends Component {
	// static async getInitialProps({ match }) {
	// 	const jobs_area = match.params.area || "us";
	// 	// CDN => data
	// 	// API => json.data
	// 	// const jobsUrl = `https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/${jobs_area}-50.json`; // Cloudfront
	// 	const jobsUrl_local = `http://localhost:1080/api/v1/jobs.json?limit=50`; // local API
	// 	try {
	// 		const res = await fetch(jobsUrl_local);
	// 		const json = await res.json();
	// 		// console.log("getInitialProps fetched " + json.data.length + " results from " + jobsUrl_local);
	// 		return { jobs: json.data || [] };
	// 	} catch (e) {
	// 		// console.error("getInitialProps fetch failed: " + jobsUrl_local + "");
	// 		return { jobs: [] };
	// 	}
	// }
	render() {
		return (
			<Layout style={{ background: "#111" }}>
				<Styled.Page style={{ background: "#fff" }}>
					<div className="home-map">
						<div className="home-map-content">
							<Link to="/in/la" className="home-map-hotspot ui-hotspot" style={{ top: "55%", left: "5%" }}>
								<label>in LA</label>
							</Link>
							<Link to="/in/denver" className="home-map-hotspot ui-hotspot" style={{ top: "42%", left: "31%" }}>
								<label>in Denver</label>
							</Link>
							<Link to="/in/nyc" className="home-map-hotspot ui-hotspot" style={{ top: "28%", right: "8%" }}>
								<label>in NYC</label>
							</Link>
						</div>
						<div className="queries">
							<h3>
								<SearchSelect selectProperty="area" />
							</h3>
						</div>
						<div className="bottom">
							<Link to="/in/denver" className="">
								Sample search...
							</Link>
						</div>
					</div>
					{/* <SearchResults area="us" jobs={this.props.jobs} /> */}
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
