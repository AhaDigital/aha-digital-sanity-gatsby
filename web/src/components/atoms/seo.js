import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO ({description, title, image}) {
  return (
    <Helmet
      htmlAttributes={{lang: 'sv'}}
      title={`${title} - Aha Digital`}
      titleTemplate={`${title} - Aha Digital`}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:title',
          content: `${title} - Aha Digital`
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: image
        },
      ]}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link prefetch href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Source+Sans+Pro:ital@0;1&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

SEO.defaultProps = {
  description: null,
  title: null,
  image: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
