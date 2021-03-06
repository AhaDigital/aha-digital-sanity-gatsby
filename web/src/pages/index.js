import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash.get'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Grid from '../components/molecules/Grid'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import Content from '../components/organisms/content'
import Footer from '../components/molecules/Footer'
import App from '../app'


export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
  query IndexPageQuery {
    site: sanitySiteSettings {
      mainMenu {
        mainMenuPages {
          page {
            title
            slug {
              current
            }
          }
        }
      }
    }
    page: sanityPages(_id: {eq: "a78c99c2-4c15-4a29-9bf8-0d46f834422d"}) {
      title
      pageH1 {
        inlineTextList {
          ... on SanityBodyPortableRollingText {
            _key
            _type
            bodyPortableRollingTextWords {
              word
              _key
            }
          }
          ... on SanityInlineTextListItem {
            _key
            _type
            withDecorator
            withLineBreak
            text
          }
        }
      }
      intro
      _rawContent(resolveReferences: {maxDepth: 10})
      salesPitchBlock {
        inlineTextList {
          ... on SanityInlineTextListItem {
            _key
            _type
            text
            withLineBreak
          }
          ... on SanityBodyPortableRollingText {
            _key
            _type
            bodyPortableRollingTextWords {
              word
              _key
            }
          }
        }
      }
      seo {
        ogDescription
        ogTitle
        ogImage {
          asset {
            _id
          }
        }
      }
      mainImage {
        ...SanityImage
        alt
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors, location} = props

  if (errors) {
    return (
      <App>
        <GraphQLErrorList errors={errors} />
      </App>
    )
  }

  const site = (data || {}).site
  const page = (data || {}).page
  const heading = get(page, 'pageH1.inlineTextList', []) || []
  const contentSections = get(page, '_rawContent.contentBlockType', []) || []
  const salesPitch = get(page, 'salesPitchBlock.inlineTextList', []) || []
  const pageSeo = get(page, 'seo', {}) || {}
  const image = get(page, 'mainImage', {}) || {}
  const intro = get(page, 'intro') || null

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  const heroData = {
    image,
    heading,
    intro
  }

  return (
    <App pageSEO={pageSeo} location={location} hero={heroData}>
      <Content sections={contentSections} />
      <Footer salesPitch={salesPitch} />
    </App>
  )
}

export default IndexPage
