// ./src/Document.js
import React from 'react';
import { AfterRoot, AfterData } from '@jaredpalmer/after';
import { ServerStyleSheet } from 'styled-components'
import './Document.styled.js';

class Document extends React.Component {
  // without styled-components:
  // static getInitialProps({ assets, data, renderPage }) {
  //   const page = renderPage();
  //   return { assets, data, ...page };
  // }
  static getInitialProps({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { assets, data, ...page, styleTags};
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
          {/*assets.client.css && (
            <link rel="stylesheet" href={assets.client.css} />
          )*/}
        </head>
        <body {...bodyAttrs}>
          <h1>Custom Document</h1>
          <AfterRoot />
          <AfterData data={data}/>
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        { styleTags }
        </body>
      </html>
    );
  }
}

export default Document;