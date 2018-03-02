import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Search.js";
import { getAPIHostname } from "lib/getAPI";
import Layout from "components/Layout.js";
import SearchResults from "components/search/Results.js";

class Search extends Component {
	static async getInitialProps({ match }) {
		const res = await fetch(getAPIHostname() + `/api/v1/jobs?text=&start=0&limit=50`);
		const json = await res.json();
		return { jobs: json.data || [] };
	}

	render() {
		return (
			<Layout>
				<Styled.Search>
					<h2>Welcome!</h2>
					<SearchResults jobs={this.props.jobs} />
				</Styled.Search>
			</Layout>
		);
	}
}

export default Search;
