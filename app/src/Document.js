// ./src/Document.js
import React from "react";
import { AfterRoot, AfterData } from "@jaredpalmer/after";
import { ServerStyleSheet } from "styled-components";
import PrimaryErrorBoundary from "components/error/PrimaryErrorBoundary.js";
import "./Document.styled.js";

class Document extends React.Component {
	// without styled-components:
	// static getInitialProps({ assets, data, renderPage }) {
	//   const page = renderPage();
	//   return { assets, data, ...page };
	// }
	static getInitialProps({ assets, data, renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { assets, data, ...page, styleTags };
	}

	render() {
		const { helmet, assets, data, styleTags } = this.props;
		// get attributes from React Helmet
		const htmlAttrs = helmet.htmlAttributes.toComponent();
		const bodyAttrs = helmet.bodyAttributes.toComponent();

		return (
			<html {...htmlAttrs}>
				<head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta charSet="utf-8" />
					<title>After.js | PS</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					{helmet.title.toComponent()}
					{helmet.meta.toComponent()}
					{helmet.link.toComponent()}
					{assets.client.css && <link rel="stylesheet" href={"//d3lz21p2fiot8d.cloudfront.net" + assets.client.css} />}
					{styleTags}
				</head>
				<body {...bodyAttrs}>
					<PrimaryErrorBoundary>
						<AfterRoot />
						<AfterData data={data} />
						<script type="text/javascript" src={"//d3lz21p2fiot8d.cloudfront.net" + assets.client.js} defer crossOrigin="anonymous" />
					</PrimaryErrorBoundary>
				</body>
			</html>
		);
	}
}

export default Document;
