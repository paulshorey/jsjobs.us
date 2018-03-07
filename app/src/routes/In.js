/*jshint esversion: 6 */
import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";
import SearchResults from "components/search/Results";
import SearchQuery from "components/search/Query";

class Search extends Component {
	static async getInitialProps({ match }) {
		// CDN => data
		// API => json.data
		const location_suffix = match.params.location ? "-" + match.params.location : "";
		const jobsUrl = `https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs${location_suffix}-50.json`; // Cloudfront
		const jobsUrl_local = `http://localhost:1080/api/v1/jobs${location_suffix}.json?limit=50`; // local API
		try {
			const res = await fetch(jobsUrl);
			const data = await res.json();
			// console.log("getInitialProps fetched " + data.length + " results from " + jobsUrl);
			return { jobs: data || [] };
		} catch (e) {
			// console.error("getInitialProps fetch failed: " + jobsUrl + "");
			try {
				const res = await fetch(jobsUrl_local);
				const json = await res.json();
				// console.log("getInitialProps fetched " + json.data.length + " results from " + jobsUrl_local);
				return { jobs: json.data || [] };
			} catch (e) {
				// console.error("getInitialProps fetch failed: " + jobsUrl_local + "");
				return { jobs: [] };
			}
		}
	}

	render() {
		console.log("this.props", this.props);
		return (
			<Layout>
				<Styled.Page>
					<SearchQuery />
					<SearchResults match={this.props.match} jobs={this.props.jobs} />
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
