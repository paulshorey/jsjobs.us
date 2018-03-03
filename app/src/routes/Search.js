import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
// import { getAPIHostname } from "lib/getAPI";
import Layout from "components/Layout.js";
import SearchResults from "components/search/Results.js";

class Search extends Component {
	render() {
		return (
			<Layout>
				<Styled.Page>
					<h2>Search...</h2>
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
