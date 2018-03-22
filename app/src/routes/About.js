import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";

class Search extends Component {
	render() {
		return (
			<Layout purge={true}>
				<Styled.Page>
					<h2>About...</h2>
					<p>This app needs a lot of work, but it is coming along nicely, with SSR, super fast loading for SEO, and now adding a persistent offline-data-store.</p>
					<p>
						Search: <a href="/in/la">/in/la</a>
					</p>
				</Styled.Page>
			</Layout>
		);
	}
}

export default Search;
