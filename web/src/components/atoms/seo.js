import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {imageUrlFor} from '../../lib/image-url'
import {buildImageObj} from '../../lib/helpers'

function SEO ({description, title, image}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { fallback: { fallbackSEO: fb = {}} = {}} = data
        const { ogTitle: fallbackTitle, ogDescription: fallbackDescription, ogImage: fallbackImage } = fb
        const metaImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : null
        const fbImage = (fallbackImage && fallbackImage.asset) ? imageUrlFor(buildImageObj(fallbackImage)).width(1200).url() : null

        return (
          <Helmet
            htmlAttributes={{lang: 'sv'}}
            title={`${title || fallbackTitle} - Aha Digital`}
            titleTemplate={`${title || fallbackTitle} - Aha Digital`}
            meta={[
              {
                name: 'description',
                content: description || fallbackDescription
              },
              {
                property: 'og:title',
                content: `${title || fallbackTitle} - Aha Digital`
              },
              {
                property: 'og:description',
                content: description || fallbackDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                property: 'og:image',
                content: metaImage || fbImage
              },
            ]}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  description: null,
  title: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    fallback: sanitySiteSettings {
      fallbackSEO {
        ogDescription
        ogTitle
        ogImage {
          asset {
            _id
          }
        }
      }
    }
  }
`
