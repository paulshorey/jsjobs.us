// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
            <meta httpEquiv="cache-control" content="max-age=0" />
            <meta httpEquiv="cache-control" content="no-cache" />
            <meta httpEquiv="expires" content="0" />
            <meta httpEquiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
            <meta httpEquiv="pragma" content="no-cache" />
            {/* <link rel="stylesheet" type="text/css" href="/static/style.css" /> */}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}