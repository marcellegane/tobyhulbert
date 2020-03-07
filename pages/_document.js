import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content="favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />

          <meta
            name="title"
            content="Toby Hulbert | Engineer. Mixer. Producer"
          />
          <meta
            name="description"
            content="In an era of laptop producers, Toby is a rare breed."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tobyhulbert.co.uk/" />
          <meta
            property="og:title"
            content="Toby Hulbert | Engineer. Mixer. Producer"
          />
          <meta
            property="og:description"
            content="In an era of laptop producers, Toby is a rare breed."
          />
          <meta
            property="og:image"
            content="https://tobyhulbert.co.uk/images/toby-hulbert.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tobyhulbert.co.uk/" />
          <meta
            property="twitter:title"
            content="Toby Hulbert | Engineer. Mixer. Producer"
          />
          <meta
            property="twitter:description"
            content="In an era of laptop producers, Toby is a rare breed."
          />
          <meta
            property="twitter:image"
            content="https://tobyhulbert.co.uk/images/toby-hulbert.png"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Karla|Josefin+Sans:400,600,700&display=swap"
            rel="stylesheet"
          />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
