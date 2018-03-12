/*jshint esversion: 6 */
import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";
import SearchResults from "components/search/Results";

class Search extends Component {
	static async getInitialProps({ match }) {
		const jobs_area = match.params.area || "us";
		// CDN => data
		// API => json.data
		const jobsUrl = `https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/${jobs_area}-50.json`; // Cloudfront
		const jobsUrl_local = `http://localhost:1080/api/v1/jobs/${jobs_area}.json?limit=50`; // local API
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
		return (
			<Layout>
				<Styled.Page>
					<SearchResults area={this.props.match.params.area || ""} jobs={this.props.jobs || []} />
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
