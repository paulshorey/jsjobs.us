import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";
import SearchResults from "components/search/Results.js";

class Search extends Component {
	static async getInitialProps({ match }) {
		const res = await fetch(`http://localhost/api/v1/jobs?text=&start=0&limit=50`);
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
