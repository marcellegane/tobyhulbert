import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const DocHead = ({ title, description }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Facebook OG */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="" />

      {/* Twitter OG */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="" />

      {/* WhatsApp OG */}
      <meta property="og:image" content="" />

      {/* Favicons */}
    </Head>
  </React.Fragment>
)

DocHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

DocHead.defaultProps = {
  title: 'Luna',
  description:
    'A web starter framework built with Next.js and Styled Components',
}

export default DocHead
