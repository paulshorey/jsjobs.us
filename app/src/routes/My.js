import React, { Component } from "react";
import "isomorphic-unfetch";
import * as Styled from "./styled/Page.js";
import Layout from "components/Layout.js";
import Results from "components/search/Results__my";
/*
    components
*/
class My extends Component {
	render() {
		return (
			<Layout>
				<Styled.Page className="Page">
					<Results items={{}} items_status={this.props.match.params.thing} />
				</Styled.Page>
			</Layout>
		);
	}
}

export default My;
