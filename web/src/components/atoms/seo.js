import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO ({description, title, image, pathname}) {
  const {twitter, facebook} = image
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
          content: `${title} | Aha Digital`
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:site_name',
          content: 'Aha Digital'
        },
        pathname && {
          property: 'og:url',
          content: `https://ahadigital.se${pathname === '/' ? '/' : pathname}`
        },
        {
          property: 'og:type',
          content: 'website' // Add article or blog when news is done.
        },
        {
          property: 'og:locale',
          content: 'sv_SE'
        },
        {
          property: 'og:see_also',
          content: 'https://github.com/AhaDigital/'
        },
        {
          property: 'og:see_also',
          content: 'https://www.instagram.com/ahadigital.se/'
        },
        {
          property: 'og:see_also',
          content: 'https://www.linkedin.com/company/aha-digital-swe/'
        },
        {
          property: 'og:see_also',
          content: 'https://www.facebook.com/AhaDigitalSwe/'
        },
        {
          property: 'og:see_also',
          content: 'https://twitter.com/ahadigitalswe/'
        },
        {
          property: 'og:image',
          content: facebook
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        {
          property: 'og:image:height',
          content: '627'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: '@AhaDigitalSwe'
        },
        {
          name: 'twitter:creator',
          content: '@AhaDigitalSwe'
        },
        {
          name: 'twitter:image',
          content: twitter
        },
        {
          name: 'twitter:image:width',
          content: '1200'
        },
        {
          name: 'twitter:image:height',
          content: '600'
        },
        {
          property: 'robots',
          content: 'noindex'
        },
      ]}
    >
      {pathname && (
        <link rel="canonical" href={`https://ahadigital.se${pathname === '/' ? '/' : pathname}`} />
      )}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Source+Sans+Pro:ital@0;1&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

SEO.defaultProps = {
  description: null,
  title: null,
  pathname: null,
  image: {
    facebook: null,
    twitter: null,
  },
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  pathname: PropTypes.string,
  image: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
  }),
}

export default SEO
