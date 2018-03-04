import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";

class Home extends Component {
	render() {
		return (
			<Layout>
				<Styled.Page>
					<h2>Page Not Found</h2>
				</Styled.Page>
			</Layout>
		);
	}
}

export default Home;
