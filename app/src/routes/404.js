import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Home.js";
import { getAPIHostname } from "lib/getAPI";
import Layout from "components/Layout.js";

class Home extends Component {
	render() {
		return (
			<Layout>
				<Styled.Home>
					<h2>Page Not Found</h2>
				</Styled.Home>
			</Layout>
		);
	}
}

export default Home;
