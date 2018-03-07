import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";

class Search extends Component {
	render() {
		return (
			<Layout>
				<Styled.Page>
					<h2>Welcome!</h2>
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
