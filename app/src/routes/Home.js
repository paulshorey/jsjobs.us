import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";
import SearchResults from "components/search/Results.js";

// const jobsUrl_initial = "https://jsjobsapi.s3.us-east-2.amazonaws.com/api/v1/jobs-50.json"; // S3
const jobsUrl_initial = "https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs-50.json"; // Cloudfront

class Search extends Component {
	static async getInitialProps({ match }) {
		const res = await fetch(jobsUrl_initial);
		const json = await res.json();
		return { jobs: json.data || [] };
	}

	render() {
		return (
			<Layout>
				<Styled.Page>
					<h2>Welcome!</h2>
					<SearchResults jobs={this.props.jobs} />
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
